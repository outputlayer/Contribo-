import React from "react";
import moment from "moment/moment";

export type NextClaimSectionProps = {
    claimDate: string;
    label?: string;
}

export default function NextClaimSection({claimDate, label = 'NextClaim:'}: NextClaimSectionProps) {
    const deadline = moment(claimDate);
    return (
        <div className="flex flex-row align-middle">
            <div className="flex mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"
                     fill="none" className={'inline-block'}>
                    <path
                        d="M11.4732 12.5263L12.5232 11.4763L9.74817 8.70127V5.25127H8.24817V9.30127L11.4732 12.5263ZM8.99817 16.5013C7.96067 16.5013 6.98567 16.3044 6.07317 15.9106C5.16067 15.5169 4.36692 14.9825 3.69192 14.3075C3.01692 13.6325 2.48254 12.8388 2.08879 11.9263C1.69504 11.0138 1.49817 10.0388 1.49817 9.00127C1.49817 7.96377 1.69504 6.98877 2.08879 6.07627C2.48254 5.16377 3.01692 4.37002 3.69192 3.69502C4.36692 3.02002 5.16067 2.48565 6.07317 2.0919C6.98567 1.69815 7.96067 1.50127 8.99817 1.50127C10.0357 1.50127 11.0107 1.69815 11.9232 2.0919C12.8357 2.48565 13.6294 3.02002 14.3044 3.69502C14.9794 4.37002 15.5138 5.16377 15.9075 6.07627C16.3013 6.98877 16.4982 7.96377 16.4982 9.00127C16.4982 10.0388 16.3013 11.0138 15.9075 11.9263C15.5138 12.8388 14.9794 13.6325 14.3044 14.3075C13.6294 14.9825 12.8357 15.5169 11.9232 15.9106C11.0107 16.3044 10.0357 16.5013 8.99817 16.5013ZM8.99817 15.0013C10.6607 15.0013 12.0763 14.4169 13.245 13.2481C14.4138 12.0794 14.9982 10.6638 14.9982 9.00127C14.9982 7.33877 14.4138 5.92315 13.245 4.7544C12.0763 3.58565 10.6607 3.00127 8.99817 3.00127C7.33567 3.00127 5.92004 3.58565 4.75129 4.7544C3.58254 5.92315 2.99817 7.33877 2.99817 9.00127C2.99817 10.6638 3.58254 12.0794 4.75129 13.2481C5.92004 14.4169 7.33567 15.0013 8.99817 15.0013Z"
                        fill="#FEA31B"/>
                </svg>
            </div>
            <div className="flex font-semibold mr-1 text-xs">{label}</div>
            <div className="flex font-normal  text-xs"> {moment().to(deadline)}</div>
        </div>
    )
}