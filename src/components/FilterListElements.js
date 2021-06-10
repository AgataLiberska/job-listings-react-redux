import styled from 'styled-components';

export const FilterListWrapper = styled.div`
    padding: 0 1.5rem;

    @media screen and (min-width: 50rem) {
        padding: 0 4rem;
    }
`

export const FilterListContainer = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 68.75rem;
    margin: -2.25rem auto 0;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0px 15px 20px -5px rgba(13, 113, 130, 0.15);

`

export const FiltersWrapper = styled.div`
    display: flex;
`

export const ClearFilters = styled.button`
    padding: 1.5rem 1.5rem;
    background: transparent;
    border: 0;
    font-size: 0.875rem;
    font-weight: 700;
    line-height: 1.5rem;
    color: var(--secondary-light);
    cursor: pointer;
    text-decoration: underline;
    text-decoration-color: transparent;
    transition: color 200ms ease-in-out, text-decoration-color 200ms ease-in-out;

    &:hover {
        color: var(--primary);
        text-decoration-color: var(--primary);
    }

    @media screen and (min-width: 50rem) {
        padding: 1.5rem 2.5rem;
    }
`