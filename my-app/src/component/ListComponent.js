import React,{Component} from 'react';

class ListComponent extends Component {
    constructor(props){
        super(props);
        this.exportData=this.exportData.bind(this);
        this.state = {
            data: []
        }
    }

    exportData =async () => {
        try {
            let response = await fetch('https://dummyjson.com/products?limit=100');
            let responseJson = await response.json();
            this.setState({
                data:responseJson.products
                }
            )
           } catch(error) {
            console.error(error);
          }
    }
  render(){
    return (
      <div><label>List: 100 record</label>
      <table>
        <tr>
            <th> 상품번호</th>
            <th> 상품명</th>
            <th> 브랜드</th>
            <th> 상품내용</th>
            <th> 가격</th>
            <th> 평점</th>
            <th> 재고</th>
        </tr>
        {
            this.data.map((val,key)=>{
                return (
                    <tr key = {key}>
                        <td>{val.id}</td>
                        <td>{val.title}</td>
                        <td>{val.brand}</td>
                        <td>{val.description}</td>
                        <td>{val.price}</td>
                        <td>{val.rating}</td>
                        <td>{val.stock}</td>
                    </tr>
                )
            })
        }
      </table>
    </div>
    );
  }
}

export default ListComponent;
