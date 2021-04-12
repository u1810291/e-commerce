import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from './Header';
import Body from './Body';
import { BodyContainer } from './style';
import { collapse, expand, setValue } from '../../redux/modules/sidebar/actions';
import { useWindowSize } from '../../hooks/use-window-size';
import ContainerLayout from './Wrapper';
import { DESKTOP, MOBILE, NOTEBOOK } from '../../constants/devices';
import Spinner from '../Spinner';

export default () => {
  const { device } = useWindowSize();
  const [loading, setLoading] = useState(true);
  const collapsed = useSelector(({ sidebarReducer }) => sidebarReducer.collapsed);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    dispatch(setValue(device !== DESKTOP && device !== NOTEBOOK));
    setLoading(false);
  }, [device, dispatch]);
  if (loading) return <Spinner />;

  return (
    <ContainerLayout collapsed={collapsed}>
      <Header
        collapsed={collapsed}
        handleCollapse={() => dispatch(collapse())}
        handleExpand={() => dispatch(expand())}
      />
      <BodyContainer>
        <Body collapsed={device !== MOBILE && collapsed} />
      </BodyContainer>
    </ContainerLayout>
  );
};
