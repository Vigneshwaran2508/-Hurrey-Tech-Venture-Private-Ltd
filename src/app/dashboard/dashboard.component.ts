import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private dataService: DataService) {}
  dashboardArr = this.dataService.dashboardArr;
  tempArrayHolder = this.dataService.dashboardArr;
  errorMessage;
  sortOrder = {
    schoolName: true,
    board: true,
    medium: true,
    class: true,
  };

  currentEditId = '';
  selectedRowsToDelete = [];
  newObj = {
    schoolName: '',
    board: '',
    class: '',
    medium: '',
  };

  editObj = {
    schoolName: '',
    board: '',
    class: '',
    medium: '',
  };

  ngOnInit(): void {}

  search(event: Event) {
    console.log('TO BE SEARCHED ', event.target.name, event.target.value);

    if (event.target.value != '') {
      this.dashboardArr = this.tempArrayHolder.filter(
        (opt) =>
          opt[event.target.name].toLowerCase() ==
          event.target.value.toLowerCase()
      );

      if (this.dashboardArr.length == 0)
        this.errorMessage =
          ' ' +
          event.target.name.toUpperCase() +
          ' with value "' +
          event.target.value +
          '" not found.';
    } else {
      console.log('No input');
      this.dashboardArr = this.tempArrayHolder;
    }
  }

  toggleOrder(key) {
    if (this.sortOrder[key]) {
      console.log('sort in ascending order');
      this.dashboardArr.sort(this.compareValues(key));
    } else {
      console.log('sort descending');

      this.dashboardArr.sort(this.compareValues(key, 'desc'));
      console.log('After sorting ', this.dashboardArr);
    }
    this.sortOrder[key] = !this.sortOrder[key];
  }

  compareValues(key, order = 'asc') {
    return function innerSort(a, b) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        // property doesn't exist on either object
        return 0;
      }

      const varA = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key];
      const varB = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key];

      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return order === 'desc' ? comparison * -1 : comparison;
    };
  }

  openEditRow(
    schoolName: string,
    board: string,
    medium: string,
    classn: string
  ) {
    this.currentEditId = schoolName + board + medium + classn;
    this.editObj = { schoolName, board, medium, class: classn };

    console.log('EDIT OBJECT ', this.editObj);
  }

  editRow() {
    console.log('EDIT row ', this.editObj);
    let editObjId =
      this.editObj.schoolName +
      this.editObj.board +
      this.editObj.medium +
      this.editObj.class;
    this.dashboardArr.forEach((opt, index) => {
      if (
        opt.schoolName + opt.board + opt.medium + opt.class ==
        this.currentEditId
      )
        this.dashboardArr[index] = this.editObj;
      // console.log('hi', this.currentEditId, index);
    });
    console.log('AFTER EDITING ', this.dashboardArr);
    this.dataService.dashboardArr = this.dashboardArr;
  }

  addNewRow() {
    console.log('Add new row ', this.newObj);
    this.dashboardArr.push(this.newObj);
    this.dataService.dashboardArr = this.dashboardArr;
  }

  deleteRows() {
    console.log('should delete row');
    this.dashboardArr = this.dashboardArr.filter(
      (opt) =>
        !this.selectedRowsToDelete.includes(
          opt.schoolName + opt.board + opt.medium + opt.class
        )
    );
    console.log('AFTER DELETING ROWS', this.dashboardArr);
    this.dataService.dashboardArr = this.dashboardArr;
  }

  checkBoxClick(e: any) {
    console.log('Checkbox clicked');
    if (e.target.checked) this.addToSelectedRowsToDelete(e.target.id);
    else this.deleteFromSelectedRowsToDelete(e.target.id);
  }

  addToSelectedRowsToDelete(id) {
    this.selectedRowsToDelete.push(id);

    console.log('after adding ', this.selectedRowsToDelete);
  }
  deleteFromSelectedRowsToDelete(id) {
    this.selectedRowsToDelete = this.selectedRowsToDelete.filter(
      (opt) => opt != id
    );
    console.log('after removing ', this.selectedRowsToDelete);
  }
}
