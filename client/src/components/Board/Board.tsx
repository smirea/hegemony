import styled from '@emotion/styled';
import useGame from 'client/utils/useGame';
import colors from 'client/utils/colors';
import { RoleEnum, type RoleNameNoWorkingClass } from 'shared/logic/types';

import BoardPolicies from './BoardPolicies';
import CompanyCard from '../CompanyCard';
import CompanyCardPlacement from '../CompanyCardPlacement';

const Board: React.FC = () => {
	const game = useGame();

	const format = 'normal';
	const renderCompanies = (role: RoleNameNoWorkingClass) => {
		const companies = game.data.roles[role].data.companies;
		const capacity = role === RoleEnum.capitalist ? 12 : 8;

		return (
			<>
				{companies.map((company, i) => (
					<CompanyCard key={`${company.id}:${i}`} format={format} company={company} />
				))}
				{Array.from({ length: Math.max(0, capacity - companies.length) }, (_, i) => (
					<CompanyCardPlacement key={`placeholder:${i}`} format={format} role={role} />
				))}
			</>
		);
	};

	return (
		<Root>
			<div
				className='row'
				data-spacing='.5'
				style={{
					flexWrap: 'wrap',
					border: '2px solid var(--roleCapitalistColor)',
					padding: '.5rem',
					borderRadius: '8px',
				}}
			>
				{renderCompanies(RoleEnum.capitalist)}
			</div>
			<div
				className='row mt1'
				data-spacing='.5'
				style={{
					flexWrap: 'wrap',
					border: '2px solid ' + colors.role.middleClass,
					padding: '.5rem',
					borderRadius: '8px',
				}}
			>
				{renderCompanies(RoleEnum.middleClass)}
			</div>
			<div
				className='row mt1'
				data-spacing='.5'
				style={{
					flexWrap: 'wrap',
					border: '2px solid ' + colors.role.state,
					padding: '.5rem',
					borderRadius: '8px',
				}}
			>
				{renderCompanies(RoleEnum.state)}
			</div>
			<br />
			<BoardPolicies />
			{/* <CompanyGrid
                companies={game.data.roles.capitalist.data.companies}
                width={12}
                height={1}
            /> */}
		</Root>
	);
};

export default Board;

const Root = styled.div``;
