import React, {useState} from 'react';
import { Layout, Row, Col } from 'antd';
import {Card} from './Blocks/Card';

const DATA = [
    {
        id: 1,
        name: 'Some Name',
        image: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80'
    },
    {
        id: 2,
        name: 'Some Name',
        image: 'https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1601&q=80'
    },
    {
        id: 3,
        name: 'Some Name',
        image: 'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80'
    },

];

const { Header, Footer, Content } = Layout;


export const ProductList = () => {

    const renderCards = (elements) => (
        <Col span={6}>
            <Card
                el={elements}
            />
        </Col>
    );

    return (
        <Layout style={{minHeight: '100vh'}}>
            <Header>Header</Header>
            <Content>
                <Row justify="space-around">
                    {DATA.map(el  => (
                        renderCards(el)
                    ))}
                </Row>

            </Content>
            <Footer>Footer</Footer>
        </Layout>
    )
};