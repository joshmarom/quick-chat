import * as React from 'react';

interface Props {
  readonly messages: ReadonlyArray<string>;
}

export default function Messages(props: Props) {
  return (
    <div>
      {props.messages.map((msg) => (
        <div key={msg}>{msg}</div>
      ))}
    </div>
  );
}
