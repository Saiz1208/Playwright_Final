import * as XLSX from 'xlsx';
import * as path from 'node:path';
import * as fs from 'node:fs';

const excelFilePath = path.join(__dirname, 'Test Data', 'Employee.xlsx');

if (!fs.existsSync(excelFilePath)) {
    throw new Error(`Excel file not found at: ${excelFilePath}`);
}

const workbook = XLSX.readFile(excelFilePath);
const sheet = workbook.Sheets['Sheet1'];

if (!sheet) {
    throw new Error('Sheet1 worksheet was not found in the Excel file.');
}

const data: any[] = XLSX.utils.sheet_to_json(sheet);
const totalrows = data.length;

console.log('Total Rows : ' + totalrows);

for (let rownumber = 0; rownumber < totalrows; rownumber++) {
    const empid = data[rownumber].EMPID;
    const empname = data[rownumber].EMPNAME;
    const empemail = data[rownumber].EMPMAIL;
    const empno = data[rownumber].EMPMOBILE;
    console.log(empid + ' || ' + empname + ' || ' + empemail + ' || ' + empno);
}

XLSX.utils.sheet_add_aoa(sheet, [['Sathish']], { origin: 'F10' });
XLSX.writeFile(workbook, excelFilePath);
console.log('Data written to cell F10 successfully.');
