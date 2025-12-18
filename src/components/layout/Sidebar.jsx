import React from 'react';
import SidebarItem from './SidebarItem';
import { SidebarData } from './SidebarData';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="bgft">
            {SidebarData.map((section, i) => (
                <div key={i}>
                    {/* قسم له صورة + عنوان خاص */}
                    {section.section && section.photo && (
                        <div className="stule">
                            {/* div الصورة */}
                            <div>
                                <img src={section.photo} alt="section" />
                            </div>

                            {/* div العنوان مع صورة: ستايل خاص */}
                            <div>
                                <h2 className="title-with-photo">{section.section}</h2>
                            </div>
                        </div>
                    )}

                    {/* الأقسام العادية */}
                    {section.section && !section.photo && (
                        <h2 className="title-normal">{section.section}</h2>
                    )}

                    {/* العناصر */}
                    {section.items?.map((item, j) => (
                        <SidebarItem key={j} item={item} />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Sidebar;
