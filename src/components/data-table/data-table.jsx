import React, { Fragment, useCallback, useMemo } from "react";
import {
  Container,
  Icon,
  Pagination,
  SimpleDropdown,
  Table,
  Text,
  Title,
} from "..";
import classnames from "classnames";
const DataTable = ({
  error,
  onChangePage,
  fetchList,
  page,
  pageSize,
  total,
  loading,
  columns,
  data,
  minWidth,
  renderLeftContent,
  renderRightContent,
  resultContent,
  actionSelectContent,
  renderEmpty = {},
  hasAppliedFilter = false,
  customNoResultError,
  customNoResultErrorDesc,
  bottomLeftContent = null,
  title,
  addMarginToPagination = false,
  pageable = true,
  ...props
}) => {
  const changePageCb = useCallback(
    (page) => {
      const { filterState, requestState } = onChangePage({ page });
      fetchList(filterState, requestState);
    },
    [onChangePage, fetchList]
  );

  const changePageSizeCb = useCallback(
    (pageSize) => {
      const { filterState, requestState } = onChangePage({ page: 1, pageSize });
      fetchList(requestState, filterState);
    },
    [onChangePage, fetchList]
  );

  const endListText = useMemo(() => {
    const index = page;
    const size = pageSize;

    const last = total / size;
    const intPage = Math.trunc(last);
    const p = intPage < last ? intPage + 1 : intPage;
    if (index === p || last <= 1) {
      return (
        <Text description className="text-center mt-lg">
          End of List
        </Text>
      );
    }
    return null;
  }, [page, pageSize, total]);

  if (!data.length && !loading && !error) {
    if (hasAppliedFilter) {
      return (
        <Container className="bg-white text-center min-h-page flex items-center">
          <div className="m-auto">
            <Icon name="empty-search-image" fontSize="250px" className="text-gray" />
            <Text color="text-gray" size="text-md" className="mt-md">
              {customNoResultError ? customNoResultError : "No result"}
            </Text>
            <Text color="text-gray" size="text-sm" className="mt-xs">
              {customNoResultErrorDesc ? customNoResultErrorDesc : "No result"}
            </Text>
          </div>
        </Container>
      );
    }

    const { title = "No Data", description = "", custom = null } = renderEmpty;
    return custom ? (
      <div className="bg-white text-center min-h-page flex items-center border rounded">
        <div className="m-auto p-lg">{custom}</div>
      </div>
    ) : (
      <Container className="bg-white text-center min-h-page flex items-center border rounded">
        <div className="m-auto p-lg">
          <Text color="text-gray-300" className="mt-md mb-md md:text-md">
            {title}
          </Text>
          {description && (
            <Text color="text-gray" size="text-sm" className="mt-xs">
              {description}
            </Text>
          )}
        </div>
      </Container>
    );
  }

  return (
    <div>
      {error ? (
        <div>Error</div>
      ) : (
        <Fragment>
          {resultContent && hasAppliedFilter && (
            <Text size="text-sm" className="text-left my-sm text-gray-500">
              {resultContent}
            </Text>
          )}
          <div className="md:flex justify-between items-center">
            {actionSelectContent && (
              <div>
                <SimpleDropdown
                  className="mb-sm"
                  text={actionSelectContent.text}
                  options={actionSelectContent.options}
                />
              </div>
            )}
            <div>{renderLeftContent}</div>
          </div>
          <div
            className={classnames("rounded border-b-2 border-blue w-full overflow-hidden overflow-x-auto", {
              "bg-white rounded-md": title,
            })}
          >
            {title && <Title color="text-blue pt-md pb-xs px-md">{title}</Title>}
            <Table
              tableStyle="auto"
              loading={loading}
              columns={columns}
              data={data}
              minWidth={minWidth}
              {...props}
            />
          </div>
          <div className="flex justify-between align-center items-center mt-md">
            <div>{bottomLeftContent}</div>
            <div>
              {pageable && (
                <Pagination
                  className={addMarginToPagination ? "mr-md" : null}
                  onChangePage={changePageCb}
                  onChangePageSize={changePageSizeCb}
                  page={page}
                  pageSize={pageSize}
                  total={total}
                />
              )}
            </div>
          </div>
          {endListText}
        </Fragment>
      )}
    </div>
  );
};

export default DataTable;
