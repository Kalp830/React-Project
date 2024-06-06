import "./ShowList.css"
function ShowList(){
    let list =[
        {title:'Cabbage', isFruit:true, id:1 },
        {title:'Gralic', isFruit:true, id:2 },
        {title:'Apple', isFruit:false, id:3 },
        {title:'Banana', isFruit:false, id:4},
        {title:'Oranage', isFruit:false, id:5 },

    ];
    let listItems = list.map(items=>
        <li key={items.id} style={{color: items.isFruit ? 'red' : 'darkgreen'}}>{items.title}</li>
    );
    return(
        <div className="list-item">
       <ul>{listItems}</ul>
       </div>
    );
}
export default ShowList;