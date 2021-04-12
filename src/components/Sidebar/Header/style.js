import styled, { css } from 'styled-components';
import { ReactComponent as CollapseIcon } from '../../../assets/icons/sidebar-collapse.svg';
import { ReactComponent as ExpandIcon } from '../../../assets/icons/sidebar-expand.svg';

const common = css`
    cursor: pointer;
    fill: #262626;
`;

export const Header = styled.div`
    grid-area: header;
    display: grid;
    place-items: center;
    height: var(--navbar-height);
    box-sizing: border-box;
    padding: ${({ collapsed }) => (!collapsed && '0 var(--sidebar-padding-x)')};
`;

export const TitleContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: ${({ collapsed }) => (collapsed ? 'center' : 'space-between')};
    align-items: center;
`;

export const CollapseButton = styled(CollapseIcon)`
    ${common}
`;
export const ExpandButton = styled(ExpandIcon)`
    ${common}
`;
