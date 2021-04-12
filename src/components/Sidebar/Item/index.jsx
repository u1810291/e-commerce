import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import classNames from 'classnames';
import {
  Container, Title, IconContainer, SubElements, SubElement
} from './style';
import Icon from '../../Icon';

const Item = ({
  title, path, icon, collapsed, elements
}) => {
  const [hovered, setHovered] = useState(false);
  const isActive = (checkPath) => window.location.pathname.includes(checkPath);
  const history = useHistory();

  const textClassName = classNames('text-black-800', 'body-large', 'weight-regular');

  return (
    <>
      <Container
        onMouseOver={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => history.push(path)}
      >
        <IconContainer collapsed={collapsed} active={isActive(path)}>
          <Icon icon={icon} size="1.5em" />
        </IconContainer>
        <Title
          active={isActive(path)}
          hovered={hovered}
          collapsed={collapsed}
          className={textClassName}
        >
          {title}
        </Title>
      </Container>
      <SubElements expand={!collapsed && isActive(path)}>
        {elements.map(
          (child, index) => !child.hidden && (
            <SubElement
              key={`${index + 1}`}
              active={isActive(child.path)}
              onClick={() => history.push(`${path}${child.path}`)}
            >
              <Title className={textClassName}>{`- ${child.title}`}</Title>
            </SubElement>
          )
        )}
      </SubElements>
    </>
  );
};

Item.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  collapsed: PropTypes.bool.isRequired
};

export default Item;
