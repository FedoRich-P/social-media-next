import { EllipsisHorizontalIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { WidgetTopItem } from '@/components/widgets/WidgetTopItem';
import { WidgetsWrapper } from '@/components/widgets/WidgetsWrapper';
import { widgetBottomData, widgetTopData } from '@/constants/widets';
import { WidgetBottomItem } from '@/components/widgets/WidgetBottomItem';

export function Widgets() {
	return (
		<aside
			className={
				'h-[calc(100vh-var(--footer-height))] sticky t-0 overflow-y-auto p-3 hidden lg:flex bg-white flex-col space-y-4 w-fit xl:min-w-85'
			}>
			<form
				aria-label={'Search'}
				className={
					'flex items-center gap-1 bg-[var(--widget-bg)] text-[#89959d] h-12 rounded-full p-5'
				}>
				<MagnifyingGlassIcon className={'w-5 h-5'} />
				<input type="text" className={'bg-transparent'} placeholder={'Search...'} />
			</form>

			<WidgetsWrapper title={'What`s Happening ?'}>
				{widgetTopData.map(({ title, subtitle, count }, index) => (
					<WidgetTopItem
						key={index}
						title={title}
						subtitle={subtitle}
						count={count}
						Icon={EllipsisHorizontalIcon}
					/>
				))}
			</WidgetsWrapper>
			<WidgetsWrapper title={'Who to Follow'}>
				{widgetBottomData.map(({ name, nick }, index) => (
					<WidgetBottomItem
						key={index}
						name={name}
						nick={nick}
						src={`/avatars/${nick.toLowerCase().slice(1)}.png`}
					/>
				))}
			</WidgetsWrapper>
		</aside>
	);
}
