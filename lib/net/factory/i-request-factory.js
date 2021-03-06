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
 * Интерфейс фабрики HTTP-запросов.
 *
 * @interface
 */
net.factory.IRequestFactory = function() {};


/**
 * @param {!net.RequestMethod} method Тип метода запроса.
 */
net.factory.IRequestFactory.prototype.setMethod = function(method) {};


/**
 * @param {!Object.<string, string>} headers Заголовки запроса.
 */
net.factory.IRequestFactory.prototype.setHeaders = function(headers) {};


/**
 * @param {string} key Ключ.
 * @param {string} value Значение.
 */
net.factory.IRequestFactory.prototype.setHeader = function(key, value) {};


/**
 * Создание HTTP-запроса.
 *
 * @param {boolean=} opt_needResult Флаг необходимости получения результата
 *    запроса. По-умочанию результат считается необходимым.
 * @return {!net.Request} Объект запроса.
 */
net.factory.IRequestFactory.prototype.createRequest =
    function(opt_needResult) {};
