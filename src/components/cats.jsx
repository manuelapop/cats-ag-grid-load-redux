import React, { Component } from "react";
import EditCellRenderer from "./EditCellRenderer";
import PropTypes from "prop-types";
import {
  AgGridReact,
  GridOptions,
  SortChangedEvent,
  GridReadyEvent,
  ColumnEverythingChangedEvent
} from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

class Cats extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myDashboard: [],
      componentName: "ChangeReqDashboard",
      showEdit: true,
      showDelete: false,
      paginationPageSize: 1,
      frameworkComponents: {
        EditCellRenderer: EditCellRenderer
      },
      context: { componentParent: this },
      sideBar: {
        toolPanels: [
          "columns",
          {
            id: "filters",
            labelKey: "filters",
            labelDefault: "Filters",
            iconKey: "menu",
            toolPanel: "agFiltersToolPanel"
          }
        ]
      },
      columnDefs: [
        {
          headerName: "",
          field: "url",
          width: 780,
          cellRendererFramework: EditCellRenderer,
          suppressFilter: true
        }
      ],
      rowHeight: 600
    };
  }

  //   EditCellRenderer(params) {}

  onGridReady = params => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    params.api.sizeColumnsToFit();
  };

  render() {
    return (
      <div className="container-fluid changeReqDash">
        <h5>Cats example in ag-grid</h5>
        <div className="row">
          <div className="col">
            <div
              style={{
                width: "800px",
                height: "200px",
                boxSizing: "border-box"
              }}
              className="ag-theme-balham ag-grid-container"
            >
              <AgGridReact
                style={{ width: "100%", height: "100%" }}
                context={this.state.context}
                pagination={true}
                paginationPageSize={this.state.paginationPageSize}
                enableColResize={true}
                columnDefs={this.state.columnDefs}
                rowHeight={this.state.rowHeight}
                floatingFilter={true}
                enableSorting={true}
                enableFilter={true}
                sideBar={this.state.sideBar}
                rowData={this.props.cats}
                frameworkComponents={this.state.frameworkComponents}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Cats.propTypes = {
  cats: PropTypes.array.isRequired
};

export default Cats;
