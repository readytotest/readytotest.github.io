import orangeDemoLoginPage from '../../pages/orange-demo-pom/orangeDemoLoginPage';
import orangeDemoDashboardPage from '../../pages/orange-demo-pom/orangeDemoDashboardPage';
import orangeDemoTestData from '../../fixtures/orange-demo/orangeDemoTestData.json';
import orangeDemoVerticalMenu from '../../pages/orange-demo-pom/orangeDemoVerticalMenu';
import orangeDemoMyInfoPage from '../../pages/orange-demo-pom/orangeDemoMyInfoPage';
import orangeDemoBuzzPage from '../../pages/orange-demo-pom/orangeDemoBuzzPage';
import orangeDemoRecruitmentPage from '../../pages/orange-demo-pom/orangeDemoRecruitmentPage';
import orangeDemoClaimPage from '../../pages/orange-demo-pom/orangeDemoClaimPage';
import orangeDemoAdminPage from '../../pages/orange-demo-pom/orangeDemoAdminPage';
import orangeDemoLeavePage from '../../pages/orange-demo-pom/orangeDemoLeavePage';

describe('Orange Demo Smoke Test', () => {

    beforeEach(() => {

        cy.visit(Cypress.env('orangeDemoUrl'));
        orangeDemoLoginPage.enterUsername(orangeDemoTestData.loginCredentials.usernameValid);
        orangeDemoLoginPage.enterPassword(orangeDemoTestData.loginCredentials.passwordValid);
        orangeDemoLoginPage.clickLoginButton();      
        orangeDemoDashboardPage.confirmOnDashboardPage();
        cy.log('Login successful!')
      
      });

       it('My Info: change photo, edit name and work email', () => {
        
            orangeDemoVerticalMenu.clickMyInfoLink();
            orangeDemoMyInfoPage.clickProfilePhoto();
            orangeDemoMyInfoPage.uploadProfilePhoto();
            orangeDemoMyInfoPage.clickProfilePhotoSaveButton();
            
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
            orangeDemoMyInfoPage.confirmMyInfoSaveSuccessToast();

            orangeDemoMyInfoPage.clickContactDetailsLink();
            orangeDemoMyInfoPage.clearWorkEmailField();
            orangeDemoMyInfoPage.checkIfWorkEmailFieldEmpty();
            orangeDemoMyInfoPage.typeWorkEmail();
            orangeDemoMyInfoPage.checkIfWorkEmailFieldNotEmpty();
            orangeDemoMyInfoPage.clickFirstMyInfoSaveButton();
            orangeDemoMyInfoPage.confirmMyInfoSaveSuccessToast();
            
            orangeDemoMyInfoPage.confirmNameOfLoggedInUser();
            orangeDemoMyInfoPage.confirmWorkEmail();
                 
        })

        it('Buzz: add post.', () => {
        
            orangeDemoVerticalMenu.clickBuzzLink();
            orangeDemoBuzzPage.typeBuzzMessage();
            orangeDemoBuzzPage.postBuzzMessage();
            orangeDemoBuzzPage.confirmBuzzMessage();                    
        })

        it('Dashboard: check if buzz post appears and confirm a few headings', () => {
        
            orangeDemoVerticalMenu.clickDashboardLink();
            orangeDemoDashboardPage.confirmDashboardBuzzFeed();
            orangeDemoDashboardPage.confirmDashboardTimeAtWork();
            orangeDemoDashboardPage.confirmDashboardMyActions();
                    
        })



        it('Recruitment: delete candidates, add candidate and upload resume', () => {
        
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

        it('Claim: add claim, add expense, submit claim', () => {
        
            orangeDemoVerticalMenu.clickClaimLink();
            orangeDemoClaimPage.clickSubmitClaimHeaderButton();
            orangeDemoClaimPage.openEventMenu();
            orangeDemoClaimPage.selectTravelAllowanceFromEventMenu();
            orangeDemoClaimPage.openCurrencyMenu();
            orangeDemoClaimPage.selectUnitedStatesDollarFromCurrencyMenu();
            orangeDemoClaimPage.typeCommentInRemarksSection();
            orangeDemoClaimPage.clickCreateClaimButton();
            orangeDemoClaimPage.clickAddExpenseButton();
            orangeDemoClaimPage.clickExpenseTypeModalMenu();
            orangeDemoClaimPage.selectFuelAllowanceFromexpenseTypeModalMenu();
            orangeDemoClaimPage.typeDateIntoExpenseDatePicker();
            orangeDemoClaimPage.inputExpenseAmount();
            orangeDemoClaimPage.addNoteToExpense();
            orangeDemoClaimPage.clickExpenseModalSaveButton();
            orangeDemoClaimPage.clickSubmitClaimButton();
            orangeDemoClaimPage.confirmSubmitClaimSuccessToast();
            orangeDemoClaimPage.clickMyClaimsHeaderButton();
            orangeDemoClaimPage.confirmClaimDescription();
            orangeDemoClaimPage.confirmClaimStatus();
            orangeDemoClaimPage.confirmClaimAmount();
        
            })    

        it('Admin: change organization name', () => {
            orangeDemoVerticalMenu.clickAdminLink();
            orangeDemoAdminPage.clickOrganizationMenu();
            orangeDemoAdminPage.clickGeneralInfoSubMenu();
            orangeDemoAdminPage.clickEditGeneralInfoSlider();
            orangeDemoAdminPage.clearOrganizationNameField();
            orangeDemoAdminPage.checkIfOrganizationNameFieldEmpty();
            orangeDemoAdminPage.typeOrganizationName();
            orangeDemoAdminPage.checkIfOrganizationNameFieldNotEmpty();
            orangeDemoAdminPage.clickOrganizationSaveButton();
            orangeDemoAdminPage.confirmOrganizationName();
        })

        it('Leave: add vacation credit', () => {
            orangeDemoVerticalMenu.clickLeaveLink();
            orangeDemoLeavePage.clickEntitlementsHeaderMenu();
            orangeDemoLeavePage.clickAddEntitlementLink();
            orangeDemoLeavePage.findEmployeeInEntitlementEmployeeNameField();
            orangeDemoLeavePage.clickLeaveTypeDropdownMenu();
            orangeDemoLeavePage.selectUsVacationFromLeaveTypeMenu();
            orangeDemoLeavePage.addDaysToEntitlementField();
            orangeDemoLeavePage.clickEntitlementSaveButton();
            orangeDemoLeavePage.clickEntitlementConfirmSaveModal();
            orangeDemoLeavePage.confirmFirstListedEntitlementdays();
            
        })
            
        
      });