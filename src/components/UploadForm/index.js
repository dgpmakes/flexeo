import React, {Component} from 'react';
import {Background, Container, Block, Title, ToFill, Name,ToogleName, ToImage, Subtitle} from './Elements';
import { colors } from '../../theme';
import Toogle from '../Toogle';
import ToSelect from '../ToSelect';
const UploadForm = () => {
    return (
        <>
            {/* HEADER*/}
            <Background>
                <Container style={{boxShadow: 'inset 0px 0px 0px 3px #E6E6E6'}}>
                    <Block style={{margin:'0px 0px 16px 0px'}}>
                        <Title style={{lineHeight:'16px'}}>SUBIR TUS ZAPAS</Title>
                        <Subtitle>UPLOAD SNEAKERS</Subtitle>
                    </Block>
                    <Block>
                        <Name>Modelo</Name>
                        <ToFill type="text" placeholder="Busca tu modelo aquí..."></ToFill>
                    </Block>
                    <Block style={{display:'flex'}}>
                        <div>
                            <Name>Precio (€)</Name>
                            <ToFill type="text" placeholder="¿Cuánto pides?" style={{width: '140px', margin:'0px 20px 0px 0px'}}></ToFill>
                        </div>
                        <div>
                            <Name>Talla (EU)</Name>
                            <ToSelect type="text" placeholder="Talla" style={{width: '120px'}}></ToSelect>
                        </div>
                    </Block>
                    <Block>
                        <Name>Estado</Name>
                        <ToSelect placeholder="Escoge un estado"></ToSelect>
                    </Block>
                    <Block>
                        <Name>Descripción</Name>
                        <ToFill type="text" placeholder="Cuenta un poco los detalles de estas zapas..."></ToFill>
                    </Block>
                    <div style={{display:'flex'}}>
                        <Block style={{margin:'0px 10px 0px 0px'}}>
                           <Name>Envíos</Name>
                           <div style={{display:'flex'}}>
                                <ToogleName>Hago envíos</ToogleName>
                                <Toogle></Toogle>
                            </div>
                        </Block>
                        <Block>
                            <Name>¿Negociable?</Name>
                            <div style={{display:'flex'}}>
                                <ToogleName>Acepto ofertas</ToogleName>
                                <Toogle></Toogle>
                            </div>
                        </Block>
                    </div>
                    <Block>
                        <Name>Fotos</Name>
                        <ToImage></ToImage>
                    </Block>

                    
                </Container>
            </Background>
        
        </>
    );
};
export default UploadForm;