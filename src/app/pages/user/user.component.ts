import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormBuilderComponent } from '../../shared/components/form-builder/form-builder.component';
import { userSections } from './form-object.constants';
import { FormPageWrapperComponent } from '../../shared/components/form-page-wrapper/form-page-wrapper.component';
import { TableComponent } from '../../shared/components/form-builder/elements/table/table.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [FormBuilderComponent, FormPageWrapperComponent, TableComponent],
  templateUrl: './user.component.html',
})
export class UserFormComponent {
  form: FormGroup;
  sections = userSections;
  columns = [
    { field: 'name', header: 'Nombre', width: '40%', type: 'text' },
    { field: 'url', header: 'URL', width: '60%', type: 'text' },
    { field: 'status', header: 'Estado', width: '120px', type: 'status' }
  ];
  data: any[] = [];
  loading = false;
  paginator = true;
  rows = 10;
  first = 0;
  rowsPerPageOptions = [10, 20, 50];
  totalRecords = 0;
  filterValue = '';
  nameFilter = '';
  urlFilter = '';
  statusFilter = '';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      nombre: ['', Validators.required],
      gender: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.loadPokemons(0, this.rows);
  }

  loadPokemons(
    page: number,
    size: number,
    global: string = '',
    nameFilter: string = '',
    urlFilter: string = '',
    statusFilter: string = ''
  ) {
    this.loading = true;
    const offset = page * size;
    this.http.get<any>(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${size}`)
      .subscribe(res => {
        const possibleStatuses = ['Activo', 'Inactivo', 'Pendiente'];
        let results = res.results.map((item: any, idx: number) => ({
          ...item,
          status: possibleStatuses[idx % 3]
        }));
        if (global) {
          results = results.filter((p: any) => p.name.toLowerCase().includes(global.toLowerCase()));
        }
        if (nameFilter) {
          results = results.filter((p: any) => p.name.toLowerCase().includes(nameFilter.toLowerCase()));
        }
        if (urlFilter) {
          results = results.filter((p: any) => p.url.toLowerCase().includes(urlFilter.toLowerCase()));
        }
        if (statusFilter) {
          results = results.filter((p: any) => p.status === statusFilter);
        }
        this.data = results;
        this.totalRecords = 1118; 
        this.loading = false;
      });
  }

  onPageChange(event: any) {
    this.first = event.first;
    const page = event.first / event.rows;
    this.rows = event.rows;
    this.loadPokemons(page, this.rows, this.filterValue, this.nameFilter, this.urlFilter, this.statusFilter);
  }

  onRowSelect(event: any) {
    console.log('Fila seleccionada:', event);
  }

  onRowAction(event: any) {
    console.log('Acción:', event.action, 'Datos:', event.data);
  }

  onFilter(event: any) {
    const global = event.filters['global']?.value || '';
    const nameFilter = event.filters['name']?.value || '';
    const urlFilter = event.filters['url']?.value || '';
    const statusFilter = event.filters['status']?.value || '';

    this.filterValue = global;
    this.nameFilter = nameFilter;
    this.urlFilter = urlFilter;
    this.statusFilter = statusFilter;

    this.first = 0;
    this.loadPokemons(0, this.rows, global, nameFilter, urlFilter, statusFilter);
  }

  onSubmit(values: any) {
    console.log('Form submitted:', values);
  }

  save() {}
}