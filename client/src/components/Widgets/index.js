import React,{useContext,useEffect} from 'react';
import { Row, Col } from 'antd';
import basicStyle from '../../config/basicStyle';
import IsoWidgetsWrapper from './widgets-wrapper';
import SaleWidget from './sale/sale-widget';

import ProductContext from '../../context/productContext/productContext'


export default function Index() {
  
const { products } = useContext(ProductContext);

  const BlanceArray = products.map(function(product) {
    return product.price*product.stock;
  });
  const totalBalance = BlanceArray.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;;
  }, 0);

  
    const { rowStyle, colStyle } = basicStyle;
    const wisgetPageStyle = {
      display: 'flex',
      flexFlow: 'row wrap',
      alignItems: 'flex-start',
      padding: '15px',
      overflow: 'hidden'
    };

  return (
       <div style={wisgetPageStyle}>
       


        <Row style={rowStyle} gutter={0} justify="start">
          <Col md={6} sm={12} xs={24} style={colStyle}>
            <IsoWidgetsWrapper>
              {/* Sale Widget */}
              <SaleWidget
                label='TOTAL BLANCE'
                price={totalBalance}
                details="this is details"
                fontColor="#F75D81"
              />
    
            </IsoWidgetsWrapper>
          </Col>

          <Col md={6} sm={12} xs={24} style={colStyle}>
            <IsoWidgetsWrapper>
              {/* Sale Widget */}
              <SaleWidget
                label='SALE'
                price='1000'
                details="this is details"
                fontColor="#F75D81"
              />
            </IsoWidgetsWrapper>
          </Col>

          <Col md={6} sm={12} xs={24} style={colStyle}>
            <IsoWidgetsWrapper>
              {/* Sale Widget */}
              <SaleWidget
               label='TOTAL BLANCE'
               price='1000'
               details="this is details"
               fontColor="#F75D81"
              />
            </IsoWidgetsWrapper>
          </Col>

          <Col md={6} sm={12} xs={24} style={colStyle}>
            <IsoWidgetsWrapper>
              {/* Sale Widget */}
              <SaleWidget
              label='TOTAL BLANCE'
              price='1000'
              details="this is details"
              fontColor="#F75D81"
              />
            </IsoWidgetsWrapper>
          </Col>
        </Row>

        
      </div>
  )
}
