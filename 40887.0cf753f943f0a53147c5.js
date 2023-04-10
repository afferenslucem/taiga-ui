"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[40887],{40887:n=>{n.exports='<div class="modal-container">\n    <h1 class="title">Pay by card</h1>\n\n    <form [formGroup]="form">\n        <ng-container *ngFor="let card of cards">\n            <div class="form-block">\n                <div\n                    class="saved-card-preset"\n                    (click)="payBySelectedCard(card)"\n                >\n                    <div class="saved-card-preset__item">\n                        <div class="saved-card-preset__item__inner">\n                            <div class="saved-card-preset__item__placeholder">Card number</div>\n                            <div class="saved-card-preset__item__info">\n                                <tui-svg\n                                    class="saved-card-preset__item__info__icon"\n                                    [src]="\n                                        card.cardType === \'MasterCard\'\n                                            ? \'tuiIconMaestro\'\n                                            : card.cardType === \'Visa\'\n                                            ? \'tuiIconVisa\'\n                                            : \'tuiIconMir\'\n                                    "\n                                ></tui-svg>\n\n                                <div class="saved-card-preset__item__info__number">\n                                    {{ card.firstSix }}****{{ card.lastFour }}\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </ng-container>\n\n        <div class="form-block">\n            <ng-container *ngIf="iOS">\n                \x3c!-- hack: open keyboard on iOS before focus target card input --\x3e\n                \x3c!-- hack: use autocomplete/inputmode attrs if you want autofill in keyboard  --\x3e\n                <input\n                    tuiAutoFocus\n                    maxlength="0"\n                    inputmode="numeric"\n                    autocomplete="cc-number"\n                    class="fake-input"\n                />\n                \x3c!-- required:\n                    You don\'t need to use this hack for iOS if your input-card elements\n                    already exist in DOM, because you don\'t need to wait for them asynchronously.\n\n                    In our example we wait loading$ state before focus real card number / card cvc.\n                --\x3e\n            </ng-container>\n\n            <ng-container *tuiLet="(loading$ | async) ?? false as loading">\n                <p *ngIf="loading">Please wait, we are loading fake cards...</p>\n\n                <tui-loader\n                    [overlay]="true"\n                    [showLoader]="loading"\n                >\n                    <tui-input-card-grouped\n                        #cardGroupedInput\n                        formControlName="card"\n                        [autocompleteEnabled]="true"\n                        [cardValidator]="cardValidator"\n                        [class.without-date]="paymentMode === PAYMENT_MODE.BySavedCard"\n                        [tuiTextfieldCleaner]="paymentMode === PAYMENT_MODE.ByNewCard"\n                    ></tui-input-card-grouped>\n                </tui-loader>\n            </ng-container>\n        </div>\n\n        <ng-container *ngIf="paymentMode === PAYMENT_MODE.ByNewCard">\n            <div class="form-block">\n                <tui-checkbox-labeled\n                    formControlName="saveCard"\n                    size="l"\n                >\n                    Remember card\n                </tui-checkbox-labeled>\n            </div>\n        </ng-container>\n\n        <div\n            *ngIf="paymentMode === PAYMENT_MODE.BySavedCard"\n            class="form-block is--links"\n        >\n            <a\n                icon="tuiIconPlus"\n                iconAlign="left"\n                tuiLink\n                (click)="payByNewCard()"\n            >\n                New card\n            </a>\n        </div>\n    </form>\n    <button\n        appearance="primary"\n        size="l"\n        tuiButton\n        type="submit"\n        [showLoader]="!!(payProcessing$ | async)"\n        (click)="pay()"\n    >\n        Pay {{ amount | tuiFormatNumber }} \u20bd\n    </button>\n</div>\n'}}]);