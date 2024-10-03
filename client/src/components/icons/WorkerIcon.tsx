import { type CompanyWorkerType, RoleEnum, type RoleMap } from 'shared/logic/types';

import WorkingClassWorkerPlacementIcon from './WorkingClassWorkerPlacementIcon';
import WorkingClassWorker3DIcon from './WorkingClassWorker3DIcon';
import MiddleClassWorkerPlacementIcon from './MiddleClassWorkerPlacementIcon';
import MiddleClassWorker3DIcon from './MiddleClassWorker3DIcon';

const WorkerIcon: React.FC<{
    role: RoleMap['workingClass']['id'] | RoleMap['middleClass']['id'];
    type?: CompanyWorkerType;
    status?: 'empty' | 'committed' | 'uncommitted';
    height?: number;
}> = ({ role, type = 'unskilled', status = 'empty', height = 2 }) => {
    const props = {
        role,
        type,
        status,
        height,
        style: {} as any,
    };

    if (status === 'committed') {
        props.style.transform = 'rotate(180deg)';
    }

    if (role === RoleEnum.workingClass) {
        if (status === 'empty') return <WorkingClassWorkerPlacementIcon {...props} />;
        return <WorkingClassWorker3DIcon {...props} />;
    }

    if (status === 'empty') return <MiddleClassWorkerPlacementIcon {...props} />;

    return <MiddleClassWorker3DIcon {...props} />;
};

export default WorkerIcon;
