import "./SkillItem.scss"

import React from "react";

type TSkillItemProps = {
    title: string;
    description?: string;
}

const SkillItem: React.FC<TSkillItemProps> = ({ title, description }) => {
    return (
        <div className="content-soft-item">
            <div className="soft-item-title">{title}</div>
            {description && (
                <div className="soft-item-description">{description}</div>
            )}
        </div>
    );
}

export default SkillItem;