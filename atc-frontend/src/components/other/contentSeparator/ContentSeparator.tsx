import "./contentSeparator.scss"
import {FC, useEffect, useRef} from "react";
import Icon, {AppIcons} from "../icon/Icon.tsx";
import {numWithZero} from "../../../utils/formatters";

type contentSeparatorProps = {
    index: number
}

const ContentSeparator: FC<contentSeparatorProps> = ({index}) => {
    const lineRef = useRef<HTMLDivElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (lineRef !== null && contentRef !== null) {
            const onView = (entries: IntersectionObserverEntry[]) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('inview')
                    }
                })
            }
            const io = new IntersectionObserver(onView)
            io.observe(lineRef.current!)
            io.observe(contentRef.current!)
        }
    }, [lineRef, contentRef]);

    return (
        <div className={"separator-container"}>
            <div ref={lineRef} className={"separator-line"}>

            </div>
            <div ref={contentRef} className={"separator-content flex-sb-c"}>
                <h3>
                    {numWithZero(index)}
                </h3>
                <Icon icon={AppIcons.circle} size={23}/>
            </div>
        </div>
    )
}

export default ContentSeparator