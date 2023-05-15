export enum ErrorCodes {
  wrongLoginOrPassword = 'WRONG_LOGIN_OR_PASSWORD',
  metroLineNotFound = 'METRO_LINE_NOT_FOUND',
  metroStationNotFound = 'METRO_STATION_NOT_FOUND',
  buildingNotFound = 'BUILDING_NOT_FOUND',
  buildingGroupNotFound = 'BUILDING_GROUP_NOT_FOUND',
  sectionNotFound = 'SECTION_NOT_FOUND',
  userNotFound = 'USER_NOT_FOUND',
  fileNotFound = 'FILE_NOT_FOUND',
  fileCannotGetPreview = 'FILE_CANNOT_GET_PREVIEW',
  userWithEmailAlreadyExists = 'USER_WITH_EMAIL_ALREADY_EXISTS',
  userWithPhoneAlreadyExists = 'USER_WITH_PHONE_ALREADY_EXISTS',
  userWithEmailNotFound = 'USER_WITH_EMAIL_NOT_FOUND',
  userWithPhoneNotFound = 'USER_WITH_PHONE_NOT_FOUND',
  projectNotFound = 'PROJECT_NOT_FOUND',
  projectMappingNotFound = 'PROJECT_MAPPING_NOT_FOUND',
  projectContractWorksNotFound = 'PROJECT_CONTRACT_WORKS_NOT_FOUND',
  milestoneNotFound = 'MILESTONE_NOT_FOUND',
  defaultMilestoneNotDeletable = 'DEFAULT_MILESTONE_NOT_DELETABLE',
  defaultWorkGroupNotDeletable = 'DEFAULT_WORK_GROUP_NOT_DELETABLE',
  workGroupNotFound = 'WORK_GROUP_NOT_FOUND',
  workNotFound = 'WORK_NOT_FOUND',
  roomGroupNotFound = 'ROOM_GROUP_NOT_FOUND',
  roomNotFound = 'ROOM_NOT_FOUND',
  roomWorkSiteNotFound = 'ROOM_WORK_SITE_NOT_FOUND',
  roomWorkSiteTaskNotFound = 'ROOM_WORK_SITE_TASK_NOT_FOUND',
  taskApprovalNotFound = 'TASK_APPROVAL_NOT_FOUND',
  taskForRoomGroupExists = 'TASK_FOR_ROOM_GROUP_EXISTS',
  taskStatusWrongTransition = 'TASK_STATUS_WRONG_TRANSITION',
  taskStatusFieldsRequired = 'TASK_STATUS_FIELDS_REQUIRED',
  workSiteNotFound = 'WORK_SITE_NOT_FOUND',
  roleNotFound = 'ROLE_NOT_FOUND',
  permissionNotFound = 'PERMISSION_NOT_FOUND',
  projectRoleNotFound = 'PROJECT_ROLE_NOT_FOUND',
  contractorNotFound = 'CONTRACTOR_NOT_FOUND',
  contractorMaterialNotFound = 'CONTRACTOR_MATERIAL_NOT_FOUND',
  manufacturerNotFound = 'MANUFACTURER_NOT_FOUND',
  materialGroupNotFound = 'MATERIAL_GROUP_NOT_FOUND',
  materialNotFound = 'MATERIAL_NOT_FOUND',
  projectMaterialNotFound = 'PROJECT_MATERIAL_NOT_FOUND',
  toolNotFound = 'TOOL_NOT_FOUND',
  jobTypeNotFound = 'JOB_TYPE_NOT_FOUND',
  unitNotFound = 'UNIT_NOT_FOUND',
  projectToolNotFound = 'PROJECT_TOOL_NOT_FOUND',
  projectEquipmentNotFound = 'PROJECT_EQUIPMENT_NOT_FOUND',
  skillNotFound = 'SKILL_NOT_FOUND',
  projectSkillNotFound = 'PROJECT_SKILL_NOT_FOUND',
  invalidRecoverPasswordRequestId = 'INVALID_RECOVER_PASSWORD_REQUEST_ID',
  permissionGroupNotSetForPermission = 'PERMISSION_GROUP_NOT_SET_FOR_PERMISSION',
  wrongDateInterval = 'WRONG_DATE_INTERVAL',
  projectContactorNotFound = 'PROJECT_CONTACTOR_NOT_FOUND',
  projectMilestonesDoesNotExist = 'PROJECT_MILESTONES_DOES_NOT_EXIST',
  milestoneWorkGroupsDoesNotExist = 'MILESTONE_WORK_GROUPS_DOES_NOT_EXIST',
  workGroupWorksDoesNotExist = 'WORK_GROUP_WORKS_DOES_NOT_EXIST',
  workAndGroupFromDifferentProject = 'WORK_AND_GROUP_FROM_DIFFERENT_PROJECT',
  workSiteNotSetForRoomWorkSite = 'WORK_SITE_NOT_SET_FOR_ROOM_WORK_SITE',
  workSiteNotSetForWorkTemplate = 'WORK_SITE_NOT_SET_FOR_WORK_TEMPLATE',
  roomTypesNotSetForWorkTemplate = 'ROOM_TYPES_NOT_SET_FOR_WORK_TEMPLATE',
  roomTypeNotSetForRoom = 'ROOM_TYPE_NOT_SET_FOR_ROOM',
  projectSectionsDoesNotExist = 'PROJECT_SECTIONS_DOES_NOT_EXIST',
  sectionStoreysDoesNotExist = 'SECTION_STOREYS_DOES_NOT_EXIST',

  // Storey
  storeyRoomsDoesNotExist = 'STOREY_ROOMS_DOES_NOT_EXIST',
  storeyNotFound = 'STOREY_NOT_FOUND',
  storeyRoomGroupsDoesNotExist = 'STOREY_ROOM_GROUPS_DOES_NOT_EXISTS',

  roomSitesDoesNotExist = 'ROOM_SITES_DOES_NOT_EXIST',
  projectStartDateNotSetForProject = 'PROJECT_START_DATE_NOT_SET_FOR_PROJECT',
  workTemplateNotFound = 'WORK_TEMPLATE_NOT_FOUND',
  entityNotFound = 'ENTITY_NOT_FOUND',
  commentNotFound = 'COMMENT_NOT_FOUND',
  taskMaterialNotFound = 'TASK_MATERIAL_NOT_FOUND',
  taskToolNotFound = 'TASK_TOOL_NOT_FOUND',
  projectMaterialNotEnough = 'PROJECT_MATERIAL_NOT_ENOUGH',
  executorNotFound = 'EXECUTOR_NOT_FOUND',
  contractNotFound = 'CONTRACT_NOT_FOUND',
  commentFailedToCreate = 'COMMENT_FILED_TO_CREATE',
  completedVolumeNotSet = 'COMPLETED_VOLUME_NOT_SET',
  completedVolumeLargerThanVolume = 'COMPLETED_VOLUME_LARGER_THAN_VOLUME',
  unitCalculationMethodNotImplemented = 'UNIT_CALCULATION_METHOD_NOT_IMPLEMENTED',
  taskOneCPaymentError = 'TASK_ONEC_PAYMENT_ERROR',
  userCannotApproveTask = 'USER_CANNOT_APPROVE_TASK',
  previousTaskApprovalRequired = 'PREVIOUS_TASK_APPROVAL_REQUIRED',
  wrongTaskStatusForApprove = 'WRONG_TASK_STATUS_FOR_APPROVE',
  smsNotSent = 'SMS_NOT_SENT',
  wrongPhoneNumberOrSmsCode = 'WRONG_PHONE_NUMBER_OR_SMS_CODE',

  // auth
  refreshTokenDoesNotBelongToCurrentDevice = 'REFRESH_TOKEN_DOES_NOT_BELONG_TO_CURRENT_DEVICE',
  refreshTokenExpired = 'REFRESH_TOKEN_EXPIRED',
  wrongPayloadInRefreshTokenException = 'WRONG_PAYLOAD_IN_REFRESH_TOKEN_EXCEPTION',

  documentTypeNotFound = 'DOCUMENT_TYPE_NOT_FOUND',
  documentTemplateNotFound = 'DOCUMENT_TEMPLATE_NOT_FOUND',
  documentNotFound = 'DOCUMENT_NOT_FOUND',
  payloadSizeTooLargeException = 'PAYLOAD_SIZE_TOO_LARGE',

  // estimate
  wrongEntityHierarchyInFile = 'WRONG_ENTITY_HIERARCHY_IN_FILE',
  tooMuchStructureDepth = 'TOO_MUCH_STRUCTURE_DEPTH',

  // report
  reportNotFound = 'REPORT_NOT_FOUND',
  taskFieldsForbidden = 'TASK_FIELDS_FORBIDDEN',
  tenantForbidden = 'TENANT_FORBIDDEN',
  paymentReportEmptyTasksList = 'PAYMENT_REPORT_EMPTY_TASKS_LIST',
  paymentReportNotFound = 'PAYMENT_REPORT_NOT_FOUND',
  paymentReportTasksListNotDistinct = 'PAYMENT_REPORT_TASKS_LIST_NOT_DISTINCT',
  roomWorkSiteTaskIsPaid = 'ROOM_WORK_SITE_TASK_IS_PAID',
  paymentReportIsPaid = 'PAYMENT_REPORT_IS_PAID',
  wrongTaskStatusForPaymentReport = 'WRONG_TASK_STATUS_FOR_PAYMENT_REPORT',
}

export enum ErrorMessages {
  // class validators messages
  isNotEmpty = 'Поле $property не может быть пустым',
  isEmail = 'Поле $property не соответствует формату электронной почты',
  isPhoneNumber = 'Поле $property не соответствует формату номера телефона',

  // custom error messages
  wrongLoginOrPassword = 'Неверный логин или пароль',
  wrongDateInterval = 'Дата старта не может быть больше даты завершения',
  metroLineNotFound = 'Линия метро ?? не найдена',
  metroStationNotFound = 'Линия метро ?? не найдена',
  buildingNotFound = 'Здание с идентификатором ?? не найдено',
  buildingGroupNotFound = 'Жилищный комплекс с идентификатором ?? не найден',
  sectionNotFound = 'Секция с идентификатором ?? не найдена',
  userNotFound = 'Пользователь с идентификатором ?? не найден',
  userWithEmailAlreadyExists = 'Пользователь с такой почтой уже существует',
  userWithPhoneAlreadyExists = 'Пользователь с таким номером телефона уже существует',
  userWithEmailNotFound = 'Пользователь с адресом ?? не найден',
  userWithPhoneNotFound = 'Пользователь с номером телефона ?? не найден',
  projectNotFound = 'Проект ?? не найден',
  projectMappingNotFound = 'Работы проекта с идентификатором ?? не содержат сопоставлений с контрактными работами (маппинг не существует)',
  projectContractWorksNotFound = 'Проект с идентификатором ?? не содержит контрактных работ',
  milestoneNotFound = 'Этап ?? не найден',
  defaultMilestoneNotDeletable = 'Этап ?? является этапом по умолчанию и не может быть удален',
  defaultWorkGroupNotDeletable = 'Группа работ ?? является группой работ по умолчанию и не может быть удалена',
  workGroupNotFound = 'Группа работ ?? не найдена',
  workNotFound = 'Работа ?? не найдена',
  roomGroupNotFound = 'Квартира ?? не найдена',
  roomNotFound = 'Помещение ?? не найдено',
  fileNotFound = 'Файл ?? не найден',
  fileCannotGetPreview = 'Невозможно сгенерировать превью для файла ??',
  roomWorkSiteNotFound = 'Поверхность ?? не найдена',
  roomWorkSiteTaskNotFound = 'Задача ?? не найдена',
  taskApprovalNotFound = 'Согласование задачи ?? не найдено',
  taskForRoomGroupExists = 'Задача с работой ?? уже существует для группы помещений ??',
  taskStatusWrongTransition = 'Задача "??" находится в статусе "??" и не может быть переведена в статус "??"',
  taskStatusFieldsRequired = 'Для перевода задачи в статус "??" необходимо заполнить поля: ??',
  workSiteNotFound = 'Тип поверхности ?? не найден',
  roleNotFound = 'Роль ?? не найдена',
  permissionNotFound = 'Разрешение не найдено',
  projectRoleNotFound = 'Проектная роль ?? не найден',
  contractorNotFound = 'Поставщик ?? не найден',
  contractorMaterialNotFound = 'Материал поставщика ?? не найден',
  manufacturerNotFound = 'Производитель ?? не найден',
  materialGroupNotFound = 'Группа материалов ?? не найдена',
  materialNotFound = 'Материал ?? не найден',
  projectMaterialNotFound = 'Материал проекта ?? не найден',
  toolNotFound = 'Инструмент ?? не найден',
  jobTypeNotFound = 'Тип работ ?? не найден',
  unitNotFound = 'Единица измерения ?? не найдена',
  projectToolNotFound = 'Инструмент проекта ?? не найден',
  projectEquipmentNotFound = 'Дополнительное оборудование проекта ?? не найден',
  skillNotFound = 'Специальность ?? не найдена',
  projectSkillNotFound = 'Специальность проекта ?? не найдена',
  invalidRecoverPasswordRequestId = 'Неверный запрос на сброс пароля',
  permissionGroupNotSetForPermission = 'Для разрешения ?? не задана группа',
  projectContactorNotFound = 'Представитель заказчика проекта ?? не найден',
  projectMilestonesDoesNotExist = 'Проект ?? не содержит этапов',
  milestoneWorkGroupsDoesNotExist = 'Этап ?? не содержит групп работ',
  workGroupWorksDoesNotExist = 'Группа работ ?? не содержит работ',
  workAndGroupFromDifferentProject = 'Группа работ ?? и работа ?? из разных проектов',
  workSiteNotSetForRoomWorkSite = 'Для поверхности помещения ?? не задан тип поверхности',
  workSiteNotSetForWorkTemplate = 'Для шаблона работы ?? не задан тип поверхности',
  roomTypesNotSetForWorkTemplate = 'Для шаблона работы ?? не заданы типы помещений',
  roomTypeNotSetForRoom = 'Для шаблона помещения ?? не задан тип помещения',
  projectSectionsDoesNotExist = 'Для проекта ?? не заданы секции',
  sectionStoreysDoesNotExist = 'Секция ?? не содержит этажей',

  // Storey
  storeyNotFound = 'Этаж ?? не найден',
  storeyRoomsDoesNotExist = 'Этаж ?? не содержит помещений',
  storeyRoomGroupsDoesNotExist = 'Этаж ?? не содержит квартир',

  roomSitesDoesNotExist = 'Помещение ?? не содержит поверхностей',
  projectStartDateNotSetForProject = 'Для проекта ?? не задана дата выхода на площадку',
  workTemplateNotFound = 'Шаблон работы ?? не найден',
  commentNotFound = 'Комментарий ?? не найден',
  entityNotFound = 'Сущность ?? с идентификатором ?? не найдена',
  taskMaterialNotFound = 'Материал задачи с идентификатором ?? не найден',
  taskToolNotFound = 'Инструмент задачи с идентификатором ?? не найден',
  projectMaterialNotEnough = 'Недостаточное количество материала ??, доступное количество: ??',
  executorNotFound = 'Исполнитель ?? не найден',
  contractNotFound = 'Контракт с идентификатором ?? не найден',
  commentFailedToCreate = 'Ошибка создания комментария',
  completedVolumeNotSet = 'Поле «Готовность от общего объёма» не может быть пустым или равным нулю. Укажите значение, и повторите попытку',
  completedVolumeLargerThanVolume = 'Указанный объём(??) выполненной работы превышает допустимые значения(??)',
  unitCalculationMethodNotImplemented = 'Указанный объём(??) выполненной работы превышает допустимые значения(??)',
  taskOneCPaymentError = 'Ошибка создания выплаты в системе 1С по задаче ??',
  userCannotApproveTask = 'Вы не являетесь участником согласования задачи ??',
  previousTaskApprovalRequired = 'По задаче ?? необходимо согласование участника с ролью ??',
  wrongTaskStatusForApprove = 'Задача ?? находится в статусе ?? и не может быть согасована',
  smsNotSent = 'Не удалось отправить СМС на номер ??',
  wrongPhoneNumberOrSmsCode = 'Неверный номер телефона или смс-код',

  // auth
  refreshTokenDoesNotBelongToCurrentDevice = 'Refresh-токен не относится к текущему устройству',
  refreshTokenExpired = 'Refresh-токен истек',
  wrongPayloadInRefreshTokenException = 'Неправильный payload в refresh-токене',

  documentTypeNotFound = 'Тип документа (??) не найден',
  documentTemplateNotFound = 'Шаблон документа (??) не найден',
  documentNotFound = 'Документ (??) не найден',
  payloadSizeTooLargeException = 'Размер сообщения превышает допустимое значение',

  // estimate
  wrongEntityHierarchyInFile = 'Неправильная иерархия сущностей в файле',
  tooMuchStructureDepth = 'Слишком большая (> ??) глубина структуры в файле',

  // report
  reportNotFound = 'Отчёт ?? не найден',

  taskFieldsForbidden = 'У вас нет прав на изменение полей ?? задачи',
  tenantForbidden = 'У вас нет прав на совершение действий в этом пространстве',

  paymentReportEmptyTasksList = 'Табель должен содержать не менее 1-й задачи',
  paymentReportNotFound = 'Табель не найден ',
  paymentReportTasksListNotDistinct = 'Табель не может содержать повторяющиеся id задач ',
  roomWorkSiteTaskIsPaid = 'Задача ?? ранее была отправлена на оплату (??)',
  paymentReportIsPaid = 'Табель ?? имеет статус ?? и не может быть отправлен на оплату снова',
  wrongTaskStatusForPaymentReport = 'Задача ?? находится в статусе ?? и не может быть добавлена в табель',
}
