import React,{Component} from 'react';

class TitleSearchBox extends Component {
    constructor(props){
        super(props);
        this.state = {
            choiceBox: "전체",
            searchKeyWord:""
        };
    }
  render(){
    const option = ["전체", "상품명", "브랜드", "상품내용"];
    return (
        <div>
            <label>상품내용</label>
            <div>
                <label>전체</label> 
                <select>
                    <option value = "전체">전체</option>
                    <option value = "상품명">상품명</option>
                    <option value = "브랜드">브랜드</option>
                    <option value = "상품내용">상품내용</option>

                </select>
            </div>
        </div>
    );
  }
}

export default TitleSearchBox;
