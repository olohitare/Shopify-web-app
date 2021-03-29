import styled from "styled-components";
import { devices } from "../utils/styled-utils";

const StyledNominationsPage = styled.div`
    header{
        padding: 20px 16px;

        .back{
            margin-left: -5px;
        }

        h2{
            color: ${props=>props.theme.dark_blue};
        }

        p{
            color:#7b7c87;
        }
    }

    .main{
        padding: 0 16px;
        padding-bottom: 60px;

        .MoviesList{
            display: flex;
            flex-direction: column;
            row-gap: 25px;
        }

        .no-nominations{
            p{
                color: #dadbdd;
            }
        }
    }

    ${devices.phoneM}{
        .main{
            .MoviesList{
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
                gap:25px 16px;
            }
        }
    }
`;

export default StyledNominationsPage;