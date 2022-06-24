/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { UserProfileId } from '@security/_types/UserProfile'

export class Response {
  body: {
    /**
     * The subset of the requested profile IDs of the users that
     * have all the requested privileges.
     */
    has_privilege_uids: UserProfileId[]
    /**
     * The subset of the requested profile IDs for which an error
     * was encountered. It does not include the missing profile IDs
     * or the profile IDs of the users that do not have all the
     * requested privileges. This field is absent if empty.
     */
    error_uids?: UserProfileId[]
  }
}
