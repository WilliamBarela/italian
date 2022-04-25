import React from 'react';

class Conjugation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <section>
        <ConjugationTable />
      </section>
    )
  }
}

function ConjugationTable(props) {
  return(
    <table>
      <thead>
        <tr>
          <th scope='col'>&nbsp;</th>
          <th scope='col'>sg.</th>
          <th scope='col'>pl.</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope='row'>1ª</th>
          <td>mangio</td>
          <td>mangiamo</td>
        </tr>
        <tr>
          <th scope='row'>2ª</th>
          <td>mangi</td>
          <td>mangiate</td>
        </tr>
        <tr>
          <th scope='row'>3ª</th>
          <td>mangia</td>
          <td>mangiano</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colSpan='3'><h5>present</h5></td>
        </tr>
      </tfoot>
    </table>
  );
}

export default Conjugation
