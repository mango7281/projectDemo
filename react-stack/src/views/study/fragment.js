import React from 'react'

function QfModel(props) {
  return(
    <div><h3>model</h3></div>
  )
}
function QfDialog(props) {
  return(
    <div><h3>dialog</h3></div>
  )
}

export default class Fragment extends React.Component {
  render() {
    return (
      <>
      {/*<React.Fragment>*/}
        <QfModel></QfModel>
        <QfDialog></QfDialog>
      {/*</React.Fragment>*/}
      </>
    )
  }
}
