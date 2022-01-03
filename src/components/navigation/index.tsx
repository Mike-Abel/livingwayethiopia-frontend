import { SvgContainer } from './style';

export default function Navigation() {
    const content = (
        <div>
            <p>Content</p>
            <p>Content</p>
        </div>
    );

    return (
        <SvgContainer>
            <div className='w-auto flex justify-between align-middle  sm:px-5 md:px-10' >
                <div className='flex gap-3 align-middle justify-center left' >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.5861 11.5V12.5C21.5861 12.7761 21.3758 13 21.1163 13H5.92406L10.105 17.44C10.1939 17.5339 10.2439 17.6617 10.2439 17.795C10.2439 17.9283 10.1939 18.0561 10.105 18.15L9.43792 18.85C9.34971 18.9446 9.22964 18.9979 9.10439 18.9979C8.97913 18.9979 8.85906 18.9446 8.77085 18.85L3.00211 12.72C2.86992 12.5795 2.79557 12.3888 2.79541 12.19V11.81C2.79757 11.6116 2.87162 11.4217 3.00211 11.28L8.77085 5.14997C8.85906 5.05532 8.97913 5.00208 9.10439 5.00208C9.22964 5.00208 9.34971 5.05532 9.43792 5.14997L10.105 5.85997C10.1934 5.95214 10.2432 6.07828 10.2432 6.20997C10.2432 6.34166 10.1934 6.46781 10.105 6.55997L5.92406 11H21.1163C21.3758 11 21.5861 11.2238 21.5861 11.5Z" />
                    </svg>
                    <span className='text-xl font-bold' >
                        Back
                    </span>
                </div>
                <div className='flex gap-3 right'>
                    <svg width="30" height="30" viewBox="0 0 48 50" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => {
                        window.open(`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`);
                    }}>
                        <path d="M4.09521 25.0048C4.09749 35.2535 11.0995 43.9798 20.6095 45.586V31.0256H15.6437V25.0048H20.6154V20.4215C20.3931 18.2497 21.0901 16.0852 22.5172 14.5151C23.9444 12.9449 25.9538 12.1319 28.0005 12.2965C29.4696 12.3217 30.935 12.461 32.385 12.7131V17.836H29.9109C29.0592 17.7173 28.2028 18.0167 27.5832 18.6499C26.9635 19.2831 26.6476 20.1816 26.7243 21.0923V25.0048H32.1482L31.2811 31.0277H26.7243V45.586C37.0093 43.856 44.2214 33.8585 43.1359 22.8362C42.0504 11.8139 33.0472 3.62547 22.6488 4.20308C12.2503 4.78068 4.09687 13.9221 4.09521 25.0048Z" />
                    </svg>

                    <svg width="30" height="30" viewBox="0 0 48 50" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => {
                        window.open(`https://twitter.com/intent/tweet?text=An%20interesting%20article,%20I%20wanted%20to%20share%20${window.location.href}`);
                    }}>
                        <path d="M40.1138 13.9323C41.8685 12.8158 43.1814 11.0577 43.8074 8.98642C42.1586 10.0277 40.3547 10.7612 38.4736 11.1552C35.8655 8.21877 31.7334 7.50418 28.3861 9.4107C25.0388 11.3172 23.305 15.3729 24.1535 19.3114C17.3998 18.9505 11.1076 15.555 6.84259 9.96975C4.61676 14.056 5.75421 19.2797 9.44197 21.9073C8.10844 21.8616 6.80448 21.4773 5.63882 20.7864C5.63882 20.8239 5.63882 20.8614 5.63882 20.8989C5.63959 25.1555 8.45815 28.822 12.378 29.6656C11.1411 30.0238 9.84363 30.0765 8.58465 29.8198C9.68703 33.4599 12.8391 35.9537 16.4317 36.0281C13.4562 38.5138 9.78153 39.8618 5.99897 39.8552C5.32852 39.8562 4.65859 39.8152 3.99268 39.7323C7.83378 42.3594 12.3044 43.7538 16.8702 43.7489C23.2223 43.7954 29.3269 41.13 33.8184 36.349C38.31 31.5679 40.8137 25.0703 40.7695 18.3093C40.7695 17.9218 40.7611 17.5364 40.7441 17.1531C42.3892 15.8877 43.809 14.3201 44.9368 12.5239C43.4042 13.247 41.7785 13.7217 40.1138 13.9323Z" />
                    </svg>

                    <svg width="30" height="30" viewBox="0 0 48 50" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => {
                        navigator.clipboard.writeText(window.location.href);

                    }}>
                        <path fillRule="evenodd" clipRule="evenodd" d="M36.0092 33.3333V8.33329C36.0092 6.03211 34.2565 4.16663 32.0945 4.16663H8.60613C6.44409 4.16663 4.69141 6.03211 4.69141 8.33329V33.3333C4.69141 35.6345 6.44409 37.5 8.60613 37.5H32.0945C34.2565 37.5 36.0092 35.6345 36.0092 33.3333ZM8.60613 8.33329H32.0945V33.3333H8.60613V8.33329ZM39.9239 37.5V12.5C42.086 12.5 43.8386 14.3654 43.8386 16.6666V37.5C43.8386 42.1023 40.3333 45.8333 36.0092 45.8333H16.4356C14.2735 45.8333 12.5209 43.9678 12.5209 41.6666H36.0092C38.1712 41.6666 39.9239 39.8011 39.9239 37.5Z" />
                    </svg>
                </div>
            </div>
        </SvgContainer>
    );
}
