import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { TagModule } from 'primeng/tag';
import { MultiSelectModule } from 'primeng/multiselect';
import { TooltipModule } from 'primeng/tooltip';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    TagModule,
    MultiSelectModule,
    TooltipModule
  ],
  templateUrl: './table.component.html',
})
export class TableComponent implements OnInit, OnChanges {
  @Input() data: any[] = [];
  @Input() columns: any[] = [];
  @Input() loading: boolean = false;
  @Input() paginator: boolean = true;
  @Input() rows: number = 10;
  @Input() first: number = 0;
  @Input() rowsPerPageOptions: number[] = [10, 25, 50];
  @Input() totalRecords: number = 0;
  @Output() onPage = new EventEmitter<any>();
  @Output() rowSelect = new EventEmitter<any>();
  @Output() rowAction = new EventEmitter<any>();
  @Output() onFilter = new EventEmitter<any>();

  globalFilterFields: string[] = [];

  statuses = [
    { label: 'Activo', value: 'Activo' },
    { label: 'Inactivo', value: 'Inactivo' },
    { label: 'Pendiente', value: 'Pendiente' }
  ];

  ngOnInit() {
    this.updateGlobalFilterFields();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['columns']) {
      this.updateGlobalFilterFields();
    }
  }

  updateGlobalFilterFields() {
    this.globalFilterFields = this.columns.map(col => col.field);
  }

  handlePage(event: any) {
    this.onPage.emit(event);
  }

  handleFilter(event: any) {
    this.onFilter.emit(event);
  }

  onRowSelect(event: any) {
    this.rowSelect.emit(event);
  }

  onActionClick(rowData: any, action: string) {
    this.rowAction.emit({ data: rowData, action });
  }

  getFieldValue(row: any, field: string): any {
    return field.split('.').reduce((acc, part) => acc && acc[part], row);
  }

  getSeverity(status: string) {
    switch (status) {
      case 'Activo':
        return 'success';
      case 'Inactivo':
        return 'danger';
      case 'Pendiente':
        return 'warning';
      default:
        return 'info';
    }
  }
}