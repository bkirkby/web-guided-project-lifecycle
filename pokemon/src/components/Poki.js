import React from 'react';

class Poki extends React.Component {
  render() {
    const { poki } = this.props;

    return (
      <div key={poki.id} className="pokemon">
        <img src={poki.img} alt={poki.name} />
        <div>
          <h3>{poki.name}</h3>
          {poki.next_evolution &&
            poki.next_evolution.map(e => <p key={e.num}>{e.name}</p>)}
        </div>
      </div>);
  }
}

export default Poki;