
import './App.css';
import { useState } from 'react';

function App() {
  const [headers, setHeaders] = useState([]);
  const [body, setbody] = useState([//{name : '' ,cells :[{name:''}]}
  ]);

  const [searchValue , setSearchValue] = useState({value:'',index:0})

  return (
    <div>
      <button id='addColumnBtn' onClick={() => {
        const newHeaders = [...headers, { name: `Col ${headers.length}` }]
        setHeaders(newHeaders)
        body.forEach(obj => {
          obj.cells.push({ cellName: `Cell ${body.length}-${headers.length}` })
        })
      }}>Add Column</button>

      <button id='addRowBtn' onClick={() => {
        const newRow = [
          ...body,
          {
            rowName: `Row ${body.length}`,
            cells: headers.map((obj, idx) => ({
              cellName: `Cell ${body.length}-${headers.length}`,
            })),
          }];
        setbody(newRow)
      }}>Add Row</button>

      <table id='tableContainer'>
        <thead id='thead'>
          {
            headers.map((obj, idx) => {
               return <ColumnHeaders name={obj.name} idx={idx} setHeaders={setHeaders} setSearchValue={setSearchValue} /> })

          }
        </thead>
        <tbody id='tbody'>
          {body.map((obj, idx) => { if(obj.cells[searchValue.index].cellName.includes(searchValue.value))
             return<RowBody rowData={obj} idx={idx}  setbody = {setbody}/>
             else return 
             })}
        </tbody>
      </table>
    </div>
  );
}
export default App;

const ColumnHeaders = (props) => {
  const { idx = 0, name = '',setHeaders , setSearchValue} = props;
  return (
    <th id={`id_${idx}`}>
      <input value={name} id='col.name' onChange={(e) => {
        setHeaders(header => {
          header[idx].name = e.target.value
          return [...header]
        })
      }} />
      <input id={idx} onChange={(e)=> setSearchValue(searchValue => {
        searchValue.value = e.target.value;
        searchValue.index =idx;
        return {...searchValue}
        }
        )} />
    </th>
  )
}

const RowBody = (props) => {
  const { rowData , idx , setbody } = props;
  const { rowName, cells } = rowData;
  return (
    <tr id={rowName}>
      {cells.map((cellObj , index) => {
        const { cellName } = cellObj;
        return (
          <td key={index}>
            <textarea value={cellName} onChange={(e) => 
              setbody(bodyData => {
                bodyData[idx].cells[index].cellName = e.target.value
                return [...bodyData]
              })
            } />
          </td>
        )
      })}
    </tr>
  )
}