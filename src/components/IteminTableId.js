import React from "react";
import { format } from 'date-fns';



export const ItemInTableId= ({items, columns, isSelected,onSelect,typeId }) => {

  function RenderTableData(columns ) {
    const tableData = columns.map((item, i) => {
      let cellValue;
  
      switch (item.name) {
          case 'timestamp':
             cellValue =  format(new Date(items[item.name]), 'yyyy-MM-dd HH:mm:ss')
          break; 
          case 'station.name':
            cellValue = items.station ? items.station.name:'Chưa có trạm nào'
         break; 
         case 'station.status':
          cellValue = (items.station&& items.station.status)==='Active' ? 'Hoạt động':'Ngừng hoạt động'
          // console.log(item, items)
       break; 
      case 'stations.thing.nameThing':
      cellValue = items.thing.nameThing
      break; 
      case 'station.thing.multiDataStreamDTOs':
        cellValue = items.thing.multiDataStreamDTOs.map((item, i) => {    
        return (
          <span
            key={i}
            className="block p-0.5 md:p-2 mx-0.5 md:m-1 cursor-pointer rounded-md border border-black"
          >
          {item.sensor.sensorName}               
          </span>
        );
      });
        break;

      default:
          cellValue = items[item.name];
      }
  
      return (
        <td key={i} className="p-1 border md:px-2 lg:px-4 lg:py-2">
          {cellValue}
        </td>
      );
    });
  
    return tableData;
  }
  const handleChange = ()=> {
    onSelect(typeId, !isSelected);
  }
  console.log(typeId)
  return (
    <tr key={typeId} className="hover:bg-gray-100 font-medium text-lg">
<td className="w-24 text-center">
  <label className="inline-flex ml-2 items-center justify-center">
    <input
      type="checkbox"
      checked={isSelected}
      onChange={handleChange}
      className="rounded text-center border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
    />
  </label>
</td>

  {RenderTableData(columns)}
  </tr>
  );
};
// {isDialogOpen && <DialogInformation onClose={closeDialog} data={fakeData} />}

