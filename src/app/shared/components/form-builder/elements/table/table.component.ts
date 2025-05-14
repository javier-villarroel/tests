import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { TagModule } from 'primeng/tag';
import { MultiSelectModule } from 'primeng/multiselect';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    CommonModule,
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
  @Input() filters: any = {};
  @Input() loading: boolean = false;
  @Input() paginator: boolean = true;
  @Input() rows: number = 10;
  @Input() rowsPerPageOptions: number[] = [10, 25, 50];

  @Output() rowSelect = new EventEmitter<any>();
  @Output() rowAction = new EventEmitter<any>();

  globalFilterFields: string[] = [];
  filteredData: any[] = [];

  statuses = [
    { label: 'Activo', value: 'active' },
    { label: 'Inactivo', value: 'inactive' },
    { label: 'Pendiente', value: 'pending' }
  ];

  selectedStatus: string | null = null;
  globalFilterValue: string = '';

  ngOnInit() {
    this.updateGlobalFilterFields();
    this.filteredData = [...this.data];
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['columns']) {
      this.updateGlobalFilterFields();
    }
    if (changes['data']) {
      this.filteredData = [...this.data];
      this.filterData();
    }
  }

  updateGlobalFilterFields() {
    this.globalFilterFields = this.columns.map(col => col.field);
  }

  getSeverity(status: string) {
    switch (status) {
      case 'active':
        return 'success';
      case 'inactive':
        return 'danger';
      case 'pending':
        return 'warning';
      default:
        return 'info';
    }
  }

  onRowSelect(event: any) {
    this.rowSelect.emit(event);
  }

  onActionClick(rowData: any, action: string) {
    this.rowAction.emit({ data: rowData, action });
  }

  onGlobalFilter(event: Event, dt: any) {
    this.globalFilterValue = (event.target as HTMLInputElement).value;
    this.filterData();
  }

  getFieldValue(row: any, field: string): any {
    return field.split('.').reduce((acc, part) => acc && acc[part], row);
  }

  onStatusFilter(status: string | null) {
    this.selectedStatus = status;
    this.filterData();
  }

  filterData() {
    let filtered = [...this.data];

    // Filtrar por estado si hay uno seleccionado
    if (this.selectedStatus) {
      filtered = filtered.filter(row => this.getFieldValue(row, 'status') === this.selectedStatus);
    }

    // Filtrar por texto global si hay texto
    if (this.globalFilterValue) {
      const filterValue = this.globalFilterValue.toLowerCase();
      filtered = filtered.filter(row =>
        this.globalFilterFields.some(field => {
          const value = this.getFieldValue(row, field);
          return value && value.toString().toLowerCase().includes(filterValue);
        })
      );
    }

    this.filteredData = filtered;
  }
}