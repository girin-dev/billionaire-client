import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'styles/Ranking.scss';

class Ranking extends Component {
  render() {
    return (
      <div className="ranking">
        랭킹 페이지
        <Link to="/deposit">예금 페이지로</Link>
        <Link to="/stock">주식 페이지로</Link>
        <Link to="/transfer">송금 페이지로</Link>
      </div>
    );
  }
}

export default Ranking;