import * as React from 'react';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

class Hi extends React.Component<Props, object> {
  render() {
    const { name, enthusiasmLevel = 1 } = this.props;

    if (enthusiasmLevel <= 0) {
      throw new Error('You could be a little more enthusiastic. :D');
    }

    return (
      <div className="hello">
        <div className="greeting">
          Hi {name + getExclamationMarks(enthusiasmLevel)}
        </div>
      </div>
    );
  }
}

export default Hi;

// helpers

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}