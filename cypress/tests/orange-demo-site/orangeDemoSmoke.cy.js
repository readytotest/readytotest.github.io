import orangeDemoLoginPage from '../../pages/orange-demo-pom/orangeDemoLoginPage';
import orangeDemoDashboardPage from '../../pages/orange-demo-pom/orangeDemoDashboardPage';
import orangeDemoTestData from '../../fixtures/orange-demo/orangeDemoTestData.json';
import orangeDemoProfileMenu from '../../pages/orange-demo-pom/orangeDemoProfileMenu';
import orangeDemoVerticalMenu from '../../pages/orange-demo-pom/orangeDemoVerticalMenu';
import orangeDemoMyInfoPage from '../../pages/orange-demo-pom/orangeDemoMyInfoPage';
import orangeDemoBuzzPage from '../../pages/orange-demo-pom/orangeDemoBuzzPage';
import orangeDemoRecruitmentPage from '../../pages/orange-demo-pom/orangeDemoRecruitmentPage';
import orangeDemoClaimPage from '../../pages/orange-demo-pom/orangeDemoClaimPage';

describe('Orange Demo Smoke Test', () => {

    beforeEach(() => {

        cy.visit(Cypress.env('orangeDemoUrl'));
        orangeDemoLoginPage.enterUsername(orangeDemoTestData.loginCredentials.usernameValid);
        orangeDemoLoginPage.enterPassword(orangeDemoTestData.loginCredentials.passwordValid);
        orangeDemoLoginPage.clickLoginButton();      
        orangeDemoDashboardPage.confirmOnDashboardPage();
        cy.log('Login successful!')
      
      });

        it('My Info: edit name and work email', () => {
        
            orangeDemoVerticalMenu.clickMyInfoLink();
            
            orangeDemoMyInfoPage.clickPersonalDetailsLink();
            orangeDemoMyInfoPage.clearFirstNameField();
            orangeDemoMyInfoPage.checkIfFirstNameFieldEmpty();
            orangeDemoMyInfoPage.typeFirstName();
            orangeDemoMyInfoPage.checkIfFirstNameFieldNotEmpty();

            orangeDemoMyInfoPage.clearMiddleNameField();
            orangeDemoMyInfoPage.checkIfMiddleNameFieldEmpty();
            orangeDemoMyInfoPage.typeMiddleName();
            orangeDemoMyInfoPage.checkIfMiddleNameFieldNotEmpty();

            orangeDemoMyInfoPage.clearLastNameField();
            orangeDemoMyInfoPage.checkIfLastNameFieldEmpty();
            orangeDemoMyInfoPage.typeLastName();
            orangeDemoMyInfoPage.checkIfLastNameFieldNotEmpty();
            orangeDemoMyInfoPage.clickFirstMyInfoSaveButton();
            //This wait is required or save won't occur
            cy.wait(1000);
            orangeDemoMyInfoPage.confirmMyInfoSaveSuccessToast();

            orangeDemoMyInfoPage.clickContactDetailsLink();
            orangeDemoMyInfoPage.clearWorkEmailField();
            orangeDemoMyInfoPage.checkIfWorkEmailFieldEmpty();
            orangeDemoMyInfoPage.typeWorkEmail();
            orangeDemoMyInfoPage.checkIfWorkEmailFieldNotEmpty();
            orangeDemoMyInfoPage.clickFirstMyInfoSaveButton();
            //This wait is required or save won't occur
            cy.wait(1000);
            orangeDemoMyInfoPage.confirmMyInfoSaveSuccessToast();
                 
        })

        it('Buzz: add post. Dashboard: check if buzz post appears and confirm headings on page', () => {
        
            orangeDemoVerticalMenu.clickBuzzLink();
            orangeDemoBuzzPage.typeBuzzMessage();
            orangeDemoBuzzPage.postBuzzMessage();
            orangeDemoVerticalMenu.clickDashboardLink();
            orangeDemoDashboardPage.confirmDashboardBuzzFeed();
            orangeDemoDashboardPage.confirmDashboardTimeAtWork();
            orangeDemoDashboardPage.confirmDashboardMyActions();
                    
        })

        it('Recruitment: add candidate and upload resume', () => {
        
            orangeDemoVerticalMenu.clickRecruitmentLink();
            orangeDemoRecruitmentPage.clickSelectAllCandidatesRecordsCheckbox();
            orangeDemoRecruitmentPage.clickDeleteSelectedCandidatesRecordsButton();
            orangeDemoRecruitmentPage.confirmDeleteSelectedCandidatesRecordsModal();
            orangeDemoRecruitmentPage.clickAddCandidateButton();
            orangeDemoRecruitmentPage.typeCandidateFirstName();
            orangeDemoRecruitmentPage.typeCandidateMiddleName();
            orangeDemoRecruitmentPage.typeCandidateLastName();
            orangeDemoRecruitmentPage.typeCandidateEmail();
            orangeDemoRecruitmentPage.openCandidateVacancyMenu();
            orangeDemoRecruitmentPage.selectSeniorQaLeadFromCandidateVacancyMenu();
            orangeDemoRecruitmentPage.uploadResume()
            //Added wait due to issues with file not uploading intermittently
            cy.wait(5000);
            orangeDemoRecruitmentPage.clickCandidateSaveButton();
            orangeDemoRecruitmentPage.confirmCandidateSaveSuccessToast();
            orangeDemoRecruitmentPage.clickCandidatesHeaderButton();
            orangeDemoRecruitmentPage.confirmCandidateWasAdded();
            orangeDemoRecruitmentPage.viewProfileOfFirstPersonListedInCandidateRecords();
            orangeDemoRecruitmentPage.confirmCandidateProfile();
            orangeDemoRecruitmentPage.confirmResumeWasUploaded();
            orangeDemoRecruitmentPage.downloadResume();
            orangeDemoRecruitmentPage.confirmResumeWasDownloaded();
            })

        it('Claim: add claim', () => {
        
            orangeDemoVerticalMenu.clickClaimLink();
            orangeDemoClaimPage.clickSubmitClaimHeaderButton();
            orangeDemoClaimPage.openEventMenu();
            orangeDemoClaimPage.selectTravelAllowanceFromEventMenu();
            orangeDemoClaimPage.openCurrencyMenu();
            orangeDemoClaimPage.selectUnitedStatesDollarFromCurrencyMenu();
            orangeDemoClaimPage.typeCommentInRemarksSection();
            orangeDemoClaimPage.clickCreateClaimButton();
            orangeDemoClaimPage.confirmSubmitClaimSuccessToast();
            orangeDemoClaimPage.clickAddExpenseButton();
            orangeDemoClaimPage.clickExpenseTypeModalMenu();
            orangeDemoClaimPage.selectFuelAllowanceFromexpenseTypeModalMenu();
            orangeDemoClaimPage.typeDateIntoExpenseDatePicker();
            orangeDemoClaimPage.inputExpenseAmount();
            orangeDemoClaimPage.addNoteToExpense();
            orangeDemoClaimPage.clickExpenseModalSaveButton();
            orangeDemoClaimPage.clickSubmitClaimButton();
        
            })    
            
        
      });