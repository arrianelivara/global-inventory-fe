import React from "react";
import { Card } from "antd"
import { CheckboxField, Field, Input, Text, Button } from "../../components";

const SignIn = () => {

  return (
    <React.Fragment>
      <div className="mt-xxl h-full">
        <Card className="p-xxl bg-white w-1/2 m-auto rounded-md border-b-2 border-red">
          <Text title size="text-lg">Sign in to your account</Text>
          <div className="mt-xl">
            <Field label="Email address">
              <Input/>
            </Field>
            <Field label="Password" className="mt-lg">
              <Input/>
            </Field>
            <Text color="text-red" fontWeight="font-semibold" className="text-right">Forgot Password?</Text>
            <CheckboxField>Remember me</CheckboxField>
            <div className="mt-lg text-right">
              <Button>
                <Text size="text-md" color="text-white" fontWeight="font-semibold">Sign in</Text>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </React.Fragment>
  );
};

export default SignIn;
