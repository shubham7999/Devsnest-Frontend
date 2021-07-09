function item({item, explain})
{
    var title = item;
    return(

        <div className="item">

          <h1>{title}</h1>
          <p>{explain}</p>

        </div>
    )
}
export default item;