import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component
import { ColDef } from 'ag-grid-community'; // Column Definition Type Interface
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AgGridAngular],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'data-table';
  rowData = [
    {  box: true, id: "01", task: "Model A", client: 64950, area:"Mobility", country: "Guernsey", contact:"Shayna_Goodwin@example.org", assignee:"Miss Gloria Ferry" },
    {  box: true, id: "02", task: "Model B", client: 64950, area:"Mobility", country: "Guernsey", contact:"test123@example.org", assignee:"Miss Rose Gold" },
    {  box: true, id: "03", task: "Model C", client: 64950, area:"Mobility", country: "Guernsey", contact:"john823@example.org", assignee:"Miss Gloria Ferry" },
    {  box: false, id: "04", task: "Model D", client: 64950, area:"Mobility", country: "Guernsey", contact:"Shayna_Goodwin@example.org", assignee:"Miss Gloria Ferry" },
    {  box: false, id: "05", task: "Model E", client: 64950, area:"Mobility", country: "Guernsey", contact:"test123@example.org", assignee:"Miss Gloria Ferry" },
    {  box: false, id: "06", task: "Model F", client: 64950, area:"Mobility", country: "Guernsey", contact:"Shayna_Goodwin@example.org", assignee:"Miss Gloria Ferry" },
    {  box: true, id: "07", task: "Model J", client: 64950, area:"Mobility", country: "Guernsey", contact:"test123@example.org", assignee:"Miss Rose Gold" },
    {  box: false, id: "08", task: "Model K", client: 64950, area:"Mobility", country: "Guernsey", contact:"john823@example.org", assignee:"Miss Gloria Ferry" },
    {  box: false, id: "09", task: "Model L", client: 64950, area:"Mobility", country: "Guernsey", contact:"Shayna_Goodwin@example.org", assignee:"Miss Gloria Ferry" },
    {  box: false, id: "10", task: "Model M", client: 64950, area:"Mobility", country: "Guernsey", contact:"Shayna_Goodwin@example.org", assignee:"Miss Rose Gold" },
    {  box: false, id: "11", task: "Model N", client: 64950, area:"Mobility", country: "Guernsey", contact:"test123@example.org", assignee:"Miss Gloria Ferry" },
    {  box: false, id: "12", task: "Model O", client: 64950, area:"Mobility", country: "Guernsey", contact:"john8231@example.org", assignee:"Miss Gloria Ferry" },
    {  box: false, id: "13", task: "Model X", client: 64950, area:"Mobility", country: "Guernsey", contact:"Shayna_Goodwin@example.org", assignee:"Miss Gloria Ferry" },
    {  box: true, id: "01", task: "Model Y", client: 64950, area:"Mobility", country: "Guernsey", contact:"john823@example.org", assignee:"Miss Gloria Ferry" },
    {  box: true, id: "02", task: "Model Z", client: 64950, area:"Mobility", country: "Guernsey", contact:"Shayna_Goodwin@example.org", assignee:"Miss Rose Gold" },
    {  box: true, id: "03", task: "Model Y", client: 64950, area:"Mobility", country: "Guernsey", contact:"Shayna_Goodwin@example.org", assignee:"Miss Gloria Ferry" },
    {  box: false, id: "04", task: "Model Y", client: 64950, area:"Mobility", country: "Guernsey", contact:"Shayna_Goodwin@example.org", assignee:"Miss Gloria Ferry" },
    {  box: false, id: "05", task: "Model Y", client: 64950, area:"Mobility", country: "Guernsey", contact:"Shayna_Goodwin@example.org", assignee:"Miss Gloria Ferry" },
    {  box: false, id: "06", task: "Model Y", client: 64950, area:"Mobility", country: "Guernsey", contact:"Shayna_Goodwin@example.org", assignee:"Miss Gloria Ferry" },
    {  box: true, id: "07", task: "Model Y", client: 64950, area:"Mobility", country: "Guernsey", contact:"Shayna_Goodwin@example.org", assignee:"Miss Gloria Ferry" },
    {  box: false, id: "08", task: "Model Y", client: 64950, area:"Mobility", country: "Guernsey", contact:"Shayna_Goodwin@example.org", assignee:"Miss Gloria Ferry" },
    {  box: false, id: "09", task: "Model Y", client: 64950, area:"Mobility", country: "Guernsey", contact:"Shayna_Goodwin@example.org", assignee:"Miss Gloria Ferry" },
    {  box: false, id: "10", task: "Model Y", client: 64950, area:"Mobility", country: "Guernsey", contact:"Shayna_Goodwin@example.org", assignee:"Miss Gloria Ferry" },
    {  box: false, id: "11", task: "Model Y", client: 64950, area:"Mobility", country: "Guernsey", contact:"Shayna_Goodwin@example.org", assignee:"Miss Gloria Ferry" },
    {  box: false, id: "12", task: "Model Y", client: 64950, area:"Mobility", country: "Guernsey", contact:"Shayna_Goodwin@example.org", assignee:"Miss Gloria Ferry" },
    {  box: false, id: "13", task: "Model Y", client: 64950, area:"Mobility", country: "Guernsey", contact:"Shayna_Goodwin@example.org", assignee:"Miss Gloria Ferry" },
    {  box: true, id: "01", task: "Model Y", client: 64950, area:"Mobility", country: "Guernsey", contact:"Shayna_Goodwin@example.org", assignee:"Miss Gloria Ferry" },
    {  box: true, id: "02", task: "Model Y", client: 64950, area:"Mobility", country: "Guernsey", contact:"Shayna_Goodwin@example.org", assignee:"Miss Gloria Ferry" },
    {  box: true, id: "03", task: "Model Y", client: 64950, area:"Mobility", country: "Guernsey", contact:"Shayna_Goodwin@example.org", assignee:"Miss Gloria Ferry" },
    {  box: false, id: "04", task: "Model Y", client: 64950, area:"Mobility", country: "Guernsey", contact:"Shayna_Goodwin@example.org", assignee:"Miss Gloria Ferry" },
    {  box: false, id: "05", task: "Model Y", client: 64950, area:"Mobility", country: "Guernsey", contact:"Shayna_Goodwin@example.org", assignee:"Miss Gloria Ferry" },
    {  box: false, id: "06", task: "Model Y", client: 64950, area:"Mobility", country: "Guernsey", contact:"Shayna_Goodwin@example.org", assignee:"Miss Gloria Ferry" },
    {  box: true, id: "07", task: "Model Y", client: 64950, area:"Mobility", country: "Guernsey", contact:"Shayna_Goodwin@example.org", assignee:"Miss Gloria Ferry" },
    {  box: false, id: "08", task: "Model Y", client: 64950, area:"Mobility", country: "Guernsey", contact:"Shayna_Goodwin@example.org", assignee:"Miss Gloria Ferry" },
    {  box: false, id: "09", task: "Model Y", client: 64950, area:"Mobility", country: "Guernsey", contact:"Shayna_Goodwin@example.org", assignee:"Miss Gloria Ferry" },
    {  box: false, id: "10", task: "Model Y", client: 64950, area:"Mobility", country: "Guernsey", contact:"Shayna_Goodwin@example.org", assignee:"Miss Gloria Ferry" },
    {  box: false, id: "11", task: "Model Y", client: 64950, area:"Mobility", country: "Guernsey", contact:"Shayna_Goodwin@example.org", assignee:"Miss Gloria Ferry" },
    {  box: false, id: "12", task: "Model Y", client: 64950, area:"Mobility", country: "Guernsey", contact:"Shayna_Goodwin@example.org", assignee:"Miss Gloria Ferry" },
    {  box: false, id: "13", task: "Model Y", client: 64950, area:"Mobility", country: "Guernsey", contact:"Shayna_Goodwin@example.org", assignee:"Miss Gloria Ferry" }
  ];

  defaultColDef:ColDef={
    flex:1,
    filter:true,
    floatingFilter:true,
    editable:true
  }; 
  pagination = true;
  paginationPageSize = 15;

  colDefs: ColDef[] = [
    { field: "box"},
    { field: "id" },
    { field: "task",
      cellEditor:"agSelectCellEditor",
      cellEditorParams:{values:['Tesla', 'Ford', 'Toyota']}
    },
    { field: "client", cellClassRules:{} },
    { field: "area",
    cellClassRules: {
      // apply green to electric cars
      'rag-green': params => params.value === true,
  }
 },
    { field: "country" },
    { field: "contact" },
    { field: "assignee" },
  ];
}
