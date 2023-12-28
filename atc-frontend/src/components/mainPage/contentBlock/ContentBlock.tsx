import {FC, ReactNode, useEffect, useRef} from "react";
import ContentSeparator from "../../other/contentSeparator/ContentSeparator.tsx";
import "./contentBlock.scss"

type contentBlockProps = {
    child: ReactNode,
    index?: number
}

const ContentBlock: FC<contentBlockProps> = ({child, index}) => {
    const contentRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (contentRef !== null) {
            const onView = (entries: IntersectionObserverEntry[]) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('inview')
                    }
                })
            }
            const io = new IntersectionObserver(onView)
            io.observe(contentRef.current!)
        }
    }, [contentRef]);

    return (
        <div>
            <div className={"body-container"}>
                {index ? <ContentSeparator index={index}/> : null}
            </div>
            <div className={'content-container'} ref={contentRef}>
                {child}
            </div>
        </div>
    )
}

export default ContentBlock