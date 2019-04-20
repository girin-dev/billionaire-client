import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Header, ProductDetail } from 'components';

class Product extends Component {
  componentDidMount () {
    this.props.getProductRequest();
  }

  render() {
    const { products, match } = this.props;
    return (
      <>
        {
          !match.params.id ?
          <Header />
          :
          <ProductDetail
            getProductDetailRequest={this.props.getProductDetailRequest}
            id={match.params.id}
            data={this.props.productDetail.data}
          />
        }
        {
          products.data && !match.params.id &&
          products.data.map((item) => (
            <article className="earning" key={item.id}>
              <h1 className="earning-title">{item.name}</h1>
              <div className="earning-amount">
                <span className="earning-current num">116</span>
                <span className="earning-variation num raise">42</span>
              </div>
              <div className="earning-graph data-panel" style={{'height':'128px', 'background': '#19191b', 'padding':'26px'}}>그래프 위치</div>
              <Link to={`/product/${item.id}`}>
                <button id="buyStock" className="btn btn-detail btn-buy"><span>상품 상세 보러 가즈아</span></button>
              </Link>
            </article>
          ))
        }
      </>
    );
  }
}

export default Product;