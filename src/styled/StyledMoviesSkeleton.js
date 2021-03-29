import styled from "styled-components";
import { devices } from "../utils/styled-utils";

const StyledMoviesSkeleton = styled.div`
    display: flex;
    flex-direction:column;
    row-gap:25px;

    ${devices.phoneM}{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap:25px 16px;
    }
`;

export default StyledMoviesSkeleton;