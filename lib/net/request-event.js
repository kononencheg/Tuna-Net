/**
 * TUNA FRAMEWORK
 *
 * Copyright (c) 2012, Sergey Kononenko
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 * * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 * * Redistributions in binary form must reproduce the above copyright
 * notice, this list of conditions and the following disclaimer in the
 * documentation and/or other materials provided with the distribution.
 * * Names of contributors may be used to endorse or promote products
 * derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL SERGEY KONONENKO BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */



/**
 * События завершения HTTP-запроса к серверу.
 *
 * @constructor
 * @extends {events.Event}
 * @param {!events.IEventDispatcher} target Объект, событие которого
 *        произошло.
 * @param {string} type Тип события.
 * @param {number} responseStatus HTTP-статус ответа.
 * @param {string=} opt_data Данные ответа.
 */
net.RequestEvent = function(target, type, responseStatus, opt_data) {
  events.Event.call(this, target, type);

  /**
   * @type {number}
   */
  this.__responseStatus = responseStatus;

  /**
   * @type {string}
   */
  this.__data = opt_data || '';
};

util.inherits(net.RequestEvent, events.Event);


/**
 * @type {string}
 */
net.RequestEvent.COMPLETE = 'complete';


/**
 * @return {string} Данные ответа.
 */
net.RequestEvent.prototype.getResponseData = function() {
  return this.__data;
};


/**
 * @return {number} HTTP-статус ответа.
 */
net.RequestEvent.prototype.getResponseStatus = function() {
  return this.__responseStatus;
};


/**
 * @return {boolean} Была ли ошибка запроса.
 */
net.RequestEvent.prototype.isRequestFailed = function() {
  return this.__responseStatus >= 400 || this.__responseStatus === 0;
};


/**
 * @return {boolean} Была ли ошибка запроса.
 */
net.RequestEvent.prototype.isRequestFailLocal = function() {
  return this.__responseStatus === 0;
};


/**
 * @return {boolean} Была ли ошибка запроса.
 */
net.RequestEvent.prototype.isRequestTimeout = function() {
  return this.__responseStatus === 504 || this.__responseStatus === 408;
};


/**
 * @return {boolean} Была ли ошибка запроса.
 */
net.RequestEvent.prototype.isRequestForbidden = function() {
  return this.__responseStatus === 403;
};

