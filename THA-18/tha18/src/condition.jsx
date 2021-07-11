function item({item, explain , val})
{
    var title = item;
    return(

        <div className="item">

          <h1>{title}</h1>
          <p style={{backgroundColor: explain <= '2' ? 'red' : "white"}}>{explain}</p>
          <h2>{val}</h2>

        </div>
    )
}
export default item;