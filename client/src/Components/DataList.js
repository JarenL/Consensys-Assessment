import React from 'react';
import Data from './Data.js';
import { Card } from '@material-ui/core';

const DataList = (props) => {
  const dataObjects = props.data.map(dataObject => {
    if (props.checkedA) {
      if (dataObject.gender === "Male") {
        return (
          <div key={dataObject.id}>
            <Data
              email={dataObject.email}
              firstName={dataObject.first_name}
              gender={dataObject.gender}
              id={dataObject.id}
              ipAddress={dataObject.ip_address}
              lastName={dataObject.last_name}
            />
          </div>
        )
      }
    }

    if (props.checkedB) {
      if (dataObject.gender === "Female") {
        return (
          <div key={dataObject.id}>
            <Data
              email={dataObject.email}
              firstName={dataObject.first_name}
              gender={dataObject.gender}
              id={dataObject.id}
              ipAddress={dataObject.ip_address}
              lastName={dataObject.last_name}
            />
          </div>
        )
      }
    }
    return null;
  })
  // If neither male or female checked, display placeholder card.
  if (!props.checkedA && !props.checkedB) {
    return (
      <Card>
        <div>
          <div>No data selected</div>
        </div>
      </Card>
    )

  } else {
    return (
      <div>
        {dataObjects}
      </div>
    );
  }

}

export default DataList