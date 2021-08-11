import React from 'react';
import { GridComponent, ColumnDirective, ColumnsDirective,
   Inject, Group,Edit, EditSettingsModel, Toolbar, ToolbarItems} from '@syncfusion/ej2-react-grids';
import { DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';
//import {DataManager,ODataV4Adaptor, Query} from '@syncfusion/ej2-data';
//import { setValue } from '@syncfusion/ej2-base';
import './App.css';


function App() {
  const data: DataManager= new DataManager({
    url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Customers/' ,
    adaptor : new ODataV4Adaptor() ,
    offline: true                                       // Setting hardcoded datasource , data adaptor and block to send info to server .
  });


  const editOptions: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting:true }
  const toolbarOptions : ToolbarItems[] = ['Add','Edit','Delete','Update','Cancel']   //Gives crud permissions and adds toolbar items

  //This is server-side code I mentioned in the README in the main branch 
  /*const baseURL: string = 'http://localhost:8080';
  const data: DataManager = new DataManager({
    adaptor: new UrlAdaptor(),
    insertUrl: baseURL + '/customers/insert',
    removeUrl:baseURL + '/customers/delete',
    updateUrl:baseURL + '/customers/update',
    url:baseURL + '/customers',
  });*/

  return (    
    <div style={{ margin: '10%' , marginTop: '5%' }}>
      
      <GridComponent dataSource={data}                  //Define Grid with it's properties and each column with css properties
        allowFiltering={true}
        allowGrouping={true}
        editSettings={editOptions}
        toolbar={toolbarOptions}        
      >       
                                                        
        <ColumnsDirective>                             
          <ColumnDirective field='CustomerID' headerText='ID' textAlign='Left' width='100'/>
          <ColumnDirective field='CompanyName' headerText='Company Name' width='300'/> 
          <ColumnDirective field='ContactName' headerText='Name' />     
          <ColumnDirective field='City' headerText='City'/>         
          <ColumnDirective field='ContactTitle' headerText='Contact Title'textAlign='Left' width='250' />   
        </ColumnsDirective>
        <Inject services={[Group, Edit, Toolbar]}/>
      </GridComponent>

    </div>
  );
}

export default App;
