import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="text-center mb-12">
      <h1 className="text-4xl font-bold mb-2">Dr. Amr El-Shehaby</h1>
      <p className="text-xl text-muted-foreground">
        Neurosurgeon & Gamma Knife Specialist
      </p>
    </header>
  );
};

export { Header };
