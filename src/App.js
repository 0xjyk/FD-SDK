import './App.css';

function App() {
  return (
    <div>
      <button onClick={() => document.Setu.FD.init({
    provider: 'EQTS',
    authToken:"eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJQMmNLU05oQ1dIbHRyVjExRldMMHE0M3dzN1FJOWN2cExhdU1pQ3pOZ09vIn0.eyJleHAiOjE2MzcxMTY2MDAsImlhdCI6MTYzNzA4MDYwMCwianRpIjoiN2JkMjljMWQtMzI4Zi00MDVkLTgyOTEtNjNmZjI3ZTU1ZDE2IiwiaXNzIjoiaHR0cHM6Ly9hdXRoLWRldi5zZXR1LmNvL2F1dGgvcmVhbG1zL2ZkIiwic3ViIjoiYTRlMGJlZDItMDEzYy00NzZkLWFmOTEtYTljNDVjOTBiOTExIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoic2V0dS1pbnRlcm5hbCIsInNlc3Npb25fc3RhdGUiOiI4NTBmNTliZS1hMTA0LTQxODUtYjdkOC1mYzUxMjYwNmQ0OWMiLCJhY3IiOiIxIiwic2NvcGUiOiJwcm9maWxlIGVtYWlsIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiIxMjM0In0.V9QItlbMjsnnY4PWSpwBLCOqQhhc_MkyJ-jp5_2M6Kj8E8bO96S2Kwa1JuOM_P0kUtyG97ct2-sI2oG8yJStsLhV74RCLfMhQwGvtaghJ0Ob55eFLTKr1f2pPkGVX_HPQfYHeVzHakzohYDuK8rz5chWfEezGIFU2nMaH2t_pfydgmUqdEZzMYBOhIdnZiFWM-OPYw3YUSIEnNfeJ-NqyaMmKmPpLHxVsFsT_MX21KXE75Q7mYUqkDlSYvYBXPMjuj106Vnzy5Z17j4xhVcgQc0hOqY5i59T2eyijWILbmLb90xetRELzOVlM-SOQbTMsMEM1In6cvmRag0ImqgKhw",
    theme: {
            textColor:'#fff',
            bgColor:'#4169e1',
            logoUrl:'http://acmelogos.com/images/logo-3.svg'
    },
    prefills: {
        amount: 25000,
        tenure: 200,
        kycParams: {
            email: "zeus@greekgods.com",
            pan: "IDKID0000I",
            mobile: "9998887776",
        },
        personalParams: {
            mothersName: "Rhea",
            fathersName: "Kronos",
            maritalStatus: 'MARRIED',
            spouseName: 'Hera',
            qualification: '10TH',
            occupation: 'EMPLOYED',
            designation: 'SALARIED',
            communicationAddress: 'some place in Mount Olympus',
            communicationPinCode: '576101',
        },
        nomineeParams: {
            nomineeRelationship: 'SON',
            nomineeName: 'Ares',
            nomineeDob: '1992-11-11',
            nomineeEmail: 'ares@greekgods.com',
            nomineePincode: '576101',
        },
        maturityParams: {
            maturityIfsc: 'SBIN0050432',
            maturityAccountNumber: '00112233445566'
        }
    } 
    
})}> Try our SDK </button>  
    </div>
  );
}

export default App;
