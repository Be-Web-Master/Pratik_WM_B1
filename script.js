const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const tableBody = document.getElementById("body");
const head = document.getElementById("head");

const addNewColumn = (colunmData) =>{
    tableData.header.push(colunmData);
    tableData.body.forEach((tableRow ,idx) => {
        const {colunmElements = []} =tableRow;
        colunmElements.push({
            elementType : 'td',
            columnName : colunmData.columnName;
            rowOrder : idx ,
            value : `Cell ${colunmData.columnName}${idx}`
        })
    })
};
const dataStore = {
  header: [
    {
      elementType: "th",
      columnName: "A",
      order: 1,
      sort: "undefined",
    },
    { elementType: "th", columnName: "B", order: 1, sort: "undefined" },
    { elementType: "th", columnName: "C", order: 1, sort: "undefined" },
  ],

  body: [
    {
      elementType: "tr",
      rowOrder: 1,
      colunmElements: [
        { elementType: "td",columnName: "Column A",order: 1,rowOrder: 1,value: "row1"},
        { elementType: "td",columnName: "Column B",order: 2,rowOrder: 2, value: "row2"},
        { elementType: "td",columnName: "Column C",order: 3,rowOrder: 3, value: "row3"}
      ],
}]
};

const dataStoreAdd = () => {
  const {header, body} = dataStore;
  
  for (let i = 0; i < header.length; i++) {
    const createTh = document.createElement(header[i].elementType);
    createTh.innerText = header[i].columnName;
    head.append(createTh);
  }
  body.forEach((tableRow) => {
    const {elementType,colunmElements} = tableRow;
    const trElement = document.createElement(elementType);
    colunmElements.forEach((cellElement) => {
        const tdElement = document.createElement(cellElement.elementType);
        tdElement.innerText=cellElement.value;
        trElement.append(tdElement);
    })
    console.log(trElement);
    tableBody.append(trElement);
    })
};
dataStoreAdd();

const addThead = () => {
  const addTh = document.createElement("th");
  const columnCount = head.childElementCount;
  addTh.innerText = `column ${columnCount + 1}`;
  head.append(addTh);
  if (tableBody.childElementCount) {
    for (const elem of tableBody.children) {
      const td = document.createElement("td");
      // td.innerText =`Row`
      elem.appendChild(td);
      td.append(createInput());
    }
  }
};

const addTbody = () => {
  const rowCount = tableBody.childElementCount + 1;
  tableBody.innerHTML = "";
  for (let j = 0; j < rowCount; j++) {
    const addTr = document.createElement("tr");
    for (let i = 1; i <= head.childElementCount; i++) {
      const addTd = document.createElement("td");
      // addTd.innerText =`Row ${i}`
      addTr.append(addTd);
      addTd.append(createInput());
    }
    tableBody.append(addTr);
  }
};
const createInput = () => {
  const inputTag = document.createElement("input");

  return inputTag;
};
