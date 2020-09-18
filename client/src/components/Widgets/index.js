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
                label='TOTAL PRODUCT BLANCE'
                price={totalBalance}
                details=""
                fontColor="black"
              />
    
            </IsoWidgetsWrapper>
          </Col>

          <Col md={6} sm={12} xs={24} style={colStyle}>
            <IsoWidgetsWrapper>
              {/* Sale Widget */}
              <SaleWidget
                label='Total SALE'
                price='0'
                details=""
                fontColor="black"
              />
            </IsoWidgetsWrapper>
          </Col>

          <Col md={6} sm={12} xs={24} style={colStyle}>
            <IsoWidgetsWrapper>
              {/* Sale Widget */}
              <SaleWidget
               label='TODAY SALE'
               price='0'
               details=""
               fontColor="black"
              />
            </IsoWidgetsWrapper>
          </Col>

          <Col md={6} sm={12} xs={24} style={colStyle}>
            <IsoWidgetsWrapper>
              {/* Sale Widget */}
              <SaleWidget
              label='LAST MONTH SALE'
              price='0'
              details=""
              fontColor="black"
              />
            </IsoWidgetsWrapper>
          </Col>
        </Row>

        
      </div>
  )
}
